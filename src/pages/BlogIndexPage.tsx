import { Link } from "react-router-dom";
import { posts } from "../content/posts";
import { formatDate } from "../utils/formatDate";

export const BlogIndexPage = () => {
  return (
    <div className="container stack" style={{ paddingTop: 0, gap: "24px" }}>
      <section className="card stack" aria-labelledby="blog-archive">
        <div className="section-heading">
          <h1 id="blog-archive" className="title">
            Blog archive
          </h1>
          <p className="subtle">
            Every experiment, teardown, and field note I have published. Filtered retro style, indexed for easy binge reading.
          </p>
        </div>

        <div className="stack" style={{ gap: "16px" }}>
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              <div className="post-meta">
                <span>{formatDate(post.date)}</span>
                <span>by {post.author}</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 style={{ margin: 0 }}>{post.title}</h2>
              <p className="subtle">{post.excerpt}</p>
              <Link className="button" to={`/blog/${post.slug}`}>
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};