import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

export type FullPost = Post & {
  content: string;
};

// Get all posts (metadata only)
export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts: Post[] = files.map((file) => {
    const fullPath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || "Untitled Post",
      date: data.date || "1970-01-01",
      description: data.description || "",
      tags: data.tags || [],
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get full post (metadata + content)
export function getPostBySlug(slug: string): FullPost {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled Post",
    date: data.date || "1970-01-01",
    description: data.description || "",
    tags: data.tags || [],
    content,
  };
}