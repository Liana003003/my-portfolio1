import { getPostBySlug, FullPost } from "../../../lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { MDXComponents } from "../../../components/MDXComponents";
import { use } from "react";
import readingTime from "reading-time";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPost({ params }: Props) {
  const { slug } = use(params); // unwrap promise
  const post: FullPost = getPostBySlug(slug);
  const readTime = readingTime(post.content).text;

  const headings = Array.from(post.content.matchAll(/^(##?\s)(.+)$/gm)).map(
    ([full, level, text]) => ({
      level: level.trim(),
      text: text.trim(),
      id: text.toLowerCase().replace(/\s+/g, "-"),
    })
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      <Link
        href="/blog"
        className="text-sm text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Blog
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            {post.date} • {readTime}
          </p>

          <div className="flex gap-2 mb-6 flex-wrap">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <article className="prose dark:prose-invert max-w-none">
            <MDXRemote source={post.content} components={MDXComponents} />
          </article>
        </div>

        {/* Table of Contents */}
        {headings.length > 0 && (
          <div className="lg:w-64 flex-none">
            {/* Desktop TOC */}
            <nav className="hidden lg:block sticky top-20 self-start bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold mb-2">Table of Contents</h3>
              <ul className="space-y-1 text-sm">
                {headings.map((h) => (
                  <li key={h.id} className={h.level === "##" ? "ml-2" : ""}>
                    <a
                      href={`#${h.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile TOC */}
            <details className="lg:hidden mb-6">
              <summary className="cursor-pointer text-blue-500 font-semibold">
                Table of Contents
              </summary>
              <ul className="space-y-1 mt-2 text-sm">
                {headings.map((h) => (
                  <li key={h.id} className={h.level === "##" ? "ml-2" : ""}>
                    <a
                      href={`#${h.id}`}
                      className="text-blue-500 hover:underline block py-1"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        )}
      </div>
    </div>
  );
}