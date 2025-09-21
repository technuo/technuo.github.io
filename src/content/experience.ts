export type TimelineItem = {
  title: string;
  period: string;
  org: string;
  description: string;
  highlights: string[];
};

export const timeline: TimelineItem[] = [
  {
    title: "Founder",
    period: "2025 - Present",
    org: "Cardify.tech",
    description:
      "Built loyalty automation stack and on-device inference for card-based interaction experiences.",
    highlights: [
      "Delivered kiosk UI in under 6 weeks with Vite + Tailwind + canvas shaders",
      "Created demand forecasting models that cut wasted stock by 18%",
      "Shipped CI/CD pipeline on Cloudflare Workers + Durable Objects"
    ],
  },
  {
    title: "Founder",
    period: "2025 - Present",
    org: "Kafe AI",
    description:
      "Leading product, engineering, and deployment for an AI platform that keeps independent coffee chains profitable.",
    highlights: [
      "Agents watch POS and IoT data to recommend daily production",
      "Gemini-powered chat assistant answers staff questions in natural language",
      "Edge-friendly UI designed with retro pixel cues for delight"
    ],
  },
];