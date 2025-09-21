import { Link } from "react-router-dom";
import { posts } from "../../content/posts";
import { formatDate } from "../../utils/formatDate";

export const BlogSpotlight = () => {
  const featured = posts.slice(0, 4);

  return (
    <section className="card stack" aria-labelledby="blog-heading">
      <div className="section-heading">
        <h2 id="blog-heading" className="title">
          Latest writings
        </h2>
        <p className="subtle">
          Deep dives on agentic systems, robotics insights, and the lessons I learn while shipping products.
        </p>
      </div>

      <div className="blog-grid">
        {featured.map((post) => (
          <article key={post.slug} className="post-card">
            <div className="post-meta">
              <span>{formatDate(post.date)}</span>
              {post.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{post.title}</h3>
            <p className="subtle">{post.excerpt}</p>
            <Link className="button" to={`/blog/${post.slug}`}>
              Read story
            </Link>
          </article>
        ))}
      </div>

      <div>
        <Link className="button" to="/blog">
          View the full archive
        </Link>
      </div>
    </section>
  );
};