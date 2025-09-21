import { profile } from "../../content/profile";

export const SkillsSection = () => {
  return (
    <section className="card stack" aria-labelledby="skills-heading">
      <div className="section-heading">
        <h2 id="skills-heading" className="title">
          Build toolkit
        </h2>
        <p className="subtle">
          A few of the ingredients I reach for when shipping scrappy prototypes or production-grade systems.
        </p>
      </div>

      <div className="grid-auto">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div key={group} className="surface" style={{ padding: "18px" }}>
            <h3 style={{ margin: "0 0 8px", fontFamily: "Press Start 2P, monospace", fontSize: "14px" }}>
              {group}
            </h3>
            <ul style={{ margin: 0 }}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};