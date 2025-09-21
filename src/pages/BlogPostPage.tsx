import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { findPostBySlug } from "../content/posts";
import { formatDate } from "../utils/formatDate";

export const BlogPostPage = () => {
  const { slug = "" } = useParams();
  const post = findPostBySlug(slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} · Nuo Jin`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="container stack" style={{ paddingTop: 0 }}>
        <section className="card stack">
          <h1 className="title">404</h1>
          <p className="subtle">I have not published that story yet.</p>
          <Link className="button" to="/blog">
            Back to blog
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="container stack" style={{ paddingTop: 0, gap: "24px" }}>
      <article className="card article">
        <header className="stack" style={{ gap: "12px" }}>
          <Link className="button" to="/blog">
            ← Back to blog
          </Link>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>{formatDate(post.date)}</span>
            <span>by {post.author}</span>
            {post.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
          {post.image && (
            <img src={post.image} alt="Cover art" />
          )}
        </header>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </div>
  );
};