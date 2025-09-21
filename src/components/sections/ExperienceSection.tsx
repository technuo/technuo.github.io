import { timeline } from "../../content/experience";

export const ExperienceSection = () => {
  return (
    <section className="card stack" aria-labelledby="experience-heading">
      <div className="section-heading">
        <h2 id="experience-heading" className="title">
          Experience log
        </h2>
        <p className="subtle">
          A quick timeline of how I grew from robotics researcher to AI product founder.
        </p>
      </div>

      <div className="timeline">
        {timeline.map((item) => (
          <article key={item.title} className="timeline-item">
            <h4>{item.title}</h4>
            <div className="meta">
              {item.period} | {item.org}
            </div>
            <p>{item.description}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};