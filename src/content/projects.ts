export type Project = {
  name: string;
  tagline: string;
  description: string;
  year: string;
  links: { label: string; href: string }[];
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Kafe AI",
    tagline: "AI operations co-pilot for boutique coffee brands",
    description:
      "End-to-end agentic workflow that ingests POS data, predicts demand, automates purchase orders, and drives a chat interface for store managers.",
    year: "2025",
    links: [
      { label: "website", href: "https://www.kafeai.tech/" },
    ],
    tags: ["RAG", "Multi-agent", "Inventory"],
  },
  {
    name: "Cardify.tech",
    tagline: "Edge AI kiosk that builds loyalty in 3 taps",
    description:
      "Designed the retro UI, captured NFC loyalty flows, and orchestrated on-device inference that syncs to a serverless analytics layer.",
    year: "2024",
    links: [{ label: "website", href: "https://www.cardify.tech/" }],
    tags: ["Edge AI", "Industrial Design", "React Native"],
  },
];