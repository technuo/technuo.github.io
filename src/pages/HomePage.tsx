import { ChatPanel } from "../components/sections/ChatPanel";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroPanel } from "../components/sections/HeroPanel";
import { SkillsSection } from "../components/sections/SkillsSection";
import { BlogSpotlight } from "../components/sections/BlogSpotlight";

export const HomePage = () => {
  return (
    <div className="container stack" style={{ paddingTop: 0, gap: "24px" }}>
      <div className="two-column" style={{ display: "grid", gap: "20px" }}>
        <HeroPanel />
        <ChatPanel />
      </div>

      <SkillsSection />
      <ExperienceSection />
      <BlogSpotlight />
    </div>
  );
};