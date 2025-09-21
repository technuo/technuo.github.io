import { Buffer } from "buffer";
import matter from "gray-matter";
import { marked } from "marked";

import { profile } from "../profile";

type FrontMatter = {
  title?: string;
  date?: string;
  author?: string;
  excerpt?: string;
  tags?: string[];
  image?: string;
};

const globalWithBuffer = globalThis as { Buffer?: typeof Buffer };

if (typeof globalWithBuffer.Buffer === "undefined") {
  globalWithBuffer.Buffer = Buffer;
}

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  image?: string;
  content: string;
  html: string;
};

const modules = import.meta.glob<string>("./*.{md,markdown}", {
  query: "?raw",
  import: "default",
  eager: true,
});

const normalizeSlug = (filePath: string) => {
  const fileName = filePath.split("/").pop() ?? filePath;
  const base = fileName.replace(/\.(md|markdown)$/i, "");
  return base
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const ensureString = (value: unknown, fallback = "") =>
  typeof value === "string" ? value : fallback;

const ensureStringArray = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.map((v) => (typeof v === "string" ? v : String(v)));
  }
  return [];
};

const toPost = (path: string, raw: string): Post => {
  const { data, content } = matter(raw) as { data: FrontMatter; content: string };
  const slug = normalizeSlug(path);

  const title = ensureString(data.title, slug);
  const date = ensureString(data.date, "1970-01-01");
  const author = ensureString(data.author, profile.name);
  const excerptSource = ensureString(
    data.excerpt,
    content.trim().split(/\n\n+/)[0] ?? ""
  );
  const excerpt = excerptSource.length > 220
    ? `${excerptSource.slice(0, 217)}...`
    : excerptSource;
  const tags = ensureStringArray(data.tags);
  const image = typeof data.image === "string" && data.image.trim() ? data.image.trim() : undefined;

  const html = marked.parse(content, { async: false }) as string;

  return {
    slug,
    title,
    date,
    author,
    excerpt,
    tags,
    image,
    content,
    html,
  };
};

export const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => toPost(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const findPostBySlug = (slug: string) => posts.find((post) => post.slug === slug);
