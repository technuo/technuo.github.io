import { profile } from "../../content/profile";
import { projects } from "../../content/projects";

export const HeroPanel = () => {
  const logoProjects = projects.slice(0, 4);

  return (
    <section className="card stack" aria-labelledby="home-intro">
      <div className="hero">
        <div className="avatar" aria-hidden="true">
          NJ
        </div>
        <div>
          <p className="subtle" style={{ margin: 0 }}>Hey, I am</p>
          <h1 id="home-intro" className="title" style={{ margin: "6px 0" }}>
            {profile.name}
          </h1>
          <p className="subtle" style={{ margin: 0 }}>{profile.role}</p>
          <p style={{ margin: "12px 0 0" }}>{profile.headline}</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {profile.heroTags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-grid" id="projects">
        {logoProjects.map((project) => (
          <a key={project.name} className="logo-card" href={project.links[0]?.href ?? "/#"}>
            <span>{project.name}</span>
          </a>
        ))}
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a className="button" href="#chat">
          Start a conversation
        </a>
        <a className="button" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
          Download resume
        </a>
      </div>
    </section>
  );
};