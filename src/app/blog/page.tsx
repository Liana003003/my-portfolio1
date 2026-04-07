import Link from "next/link";
import { getAllPosts, Post } from "../../lib/posts";

export const metadata = {
  title: "Blog | Your Name",
  description: "Articles about my journey into web development and projects.",
};

export default function Blog() {
  const posts: Post[] = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen max-w-5xl mx-auto p-6 sm:p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>

      {/* Featured Post */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
          <div className="p-8 rounded-3xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-2">{featured.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{featured.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{featured.description}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {featured.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      )}

      {/* Other posts */}
      <div className="grid md:grid-cols-2 gap-8">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-1">{post.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
              <div className="flex gap-2 mt-3 flex-wrap">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full border border-gray-300 dark:border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}