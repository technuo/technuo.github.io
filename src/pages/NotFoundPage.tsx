import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="container stack" style={{ paddingTop: 0, gap: "24px" }}>
      <section className="card stack">
        <h1 className="title">Lost in the grid</h1>
        <p className="subtle">
          That page does not exist. Maybe the pixels have drifted into another timeline.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link className="button" to="/">
            Go home
          </Link>
          <Link className="button" to="/blog">
            Browse blog
          </Link>
        </div>
      </section>
    </div>
  );
};