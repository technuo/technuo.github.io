import { NavLink, Outlet } from "react-router-dom";
import { profile } from "../../content/profile";
import { ScrollToHash } from "./ScrollToHash";

const navItems = [
  { label: "Portfolio", to: "/" },
  { label: "Projects", to: "/#projects" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: profile.resumeUrl, external: true },
  { label: "Contact", to: profile.socials.email, external: true },
];

const isExternal = (item: typeof navItems[number]) => Boolean(item.external);

export const AppLayout = () => {
  return (
    <div>
      <ScrollToHash />
      <header className="container" style={{ paddingTop: "28px" }}>
        <div className="card">
          <div
            className="wow"
            style={{
              position: "absolute",
              right: "-8px",
              bottom: "-8px",
              background: "var(--wow)",
              border: "var(--outline) solid var(--ink)",
              borderRadius: "999px",
              padding: "12px",
              transform: "rotate(-8deg)",
              boxShadow: "4px 4px 0 0 var(--shadow)",
              fontWeight: 800,
            }}
          >
            Hi!
          </div>

          <div className="navbar">
            <a className="logo-link" href={profile.socials.github} aria-label="Nuo Jin logo">
              <img src={profile.logo} alt="Nuo Jin logo" className="logo-img" />
            </a>

            <nav className="nav-links" aria-label="Primary">
              {navItems.map((item) =>
                isExternal(item) ? (
                  <a
                    key={item.label}
                    className="nav-link"
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link${isActive ? " active" : ""}`
                    }
                    end={item.to === "/"}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="container">
        <div className="subtle">
          Copyright {new Date().getFullYear()} {profile.name}. Crafted with curiosity and plenty of pixel grids.
        </div>
        <div className="footer-note">
          Built with React, Vite, and a sprinkle of retro gradients.
        </div>
      </footer>
    </div>
  );
};