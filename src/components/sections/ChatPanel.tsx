import type { FormEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "../../content/profile";
import { projects } from "../../content/projects";
import { timeline } from "../../content/experience";

const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY ?? "").trim();

export type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  text: string;
};

const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

export const ChatPanel = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pending, setPending] = useState(false);
  const [input, setInput] = useState("");
  const feedRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        text: `Hey, I am ${profile.name}. Ask me about AI agents, retro UI, or how I automate coffee shops.`,
      },
    ]);
  }, []);

  const contextString = useMemo(() => {
    const profileContext = `Name: ${profile.name}\nRole: ${profile.role}\nLocation: ${profile.location}\nInterests: ${profile.interests.join(", ")}\nSkills: ${Object.values(profile.skills)
      .flat()
      .join(", ")}`;
    const projectContext = projects
      .map((project) => `${project.name}: ${project.tagline}. ${project.description}`)
      .join("\n");
    const timelineContext = timeline
      .map((item) => `${item.period} at ${item.org} - ${item.title}. ${item.description}`)
      .join("\n");

    return `${profileContext}\nProjects:\n${projectContext}\nExperience:\n${timelineContext}`;
  }, []);

  useEffect(() => {
    const feed = feedRef.current;
    if (feed) {
      feed.scrollTop = feed.scrollHeight;
    }
  }, [messages, pending]);

  const addMessage = (message: ChatMessage) => {
    setMessages((prev) => [...prev, message]);
  };

  const localAnswer = (question: string) => {
    const lower = question.toLowerCase();
    const sections: string[] = [];

    const highlight = (label: string, lines: string[]) => {
      if (lines.length > 0) {
        sections.push(`${label}:\n- ${lines.join("\n- ")}`);
      }
    };

    if (/(skill|stack|tech|tool)/.test(lower)) {
      highlight(
        "Core stack",
        Object.entries(profile.skills).map(([key, value]) => `${key}: ${value.join(", ")}`)
      );
    }

    if (/(project|build|product|case study)/.test(lower)) {
      highlight(
        "Recent projects",
        projects.slice(0, 4).map((project) => `${project.name} - ${project.tagline}`)
      );
    }

    if (/(experience|work|career|background)/.test(lower)) {
      highlight(
        "Experience",
        timeline.map((item) => `${item.period}: ${item.org} (${item.title})`)
      );
    }

    if (/(contact|email|reach)/.test(lower)) {
      highlight("Contact", [`Email me at ${profile.email}`]);
    }

    if (sections.length === 0) {
      sections.push(`Here is a quick snapshot of my world:\n${contextString}`);
    }

    return sections.join("\n\n");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
    };

    addMessage(userMessage);
    setInput("");

    if (!GEMINI_API_KEY) {
      addMessage({
        id: crypto.randomUUID(),
        role: "assistant",
        text: localAnswer(trimmed),
      });
      addMessage({
        id: crypto.randomUUID(),
        role: "system",
        text: "Gemini API key is not configured; shared my local notes instead.",
      });
      return;
    }

    try {
      setPending(true);
      addMessage({
        id: crypto.randomUUID(),
        role: "system",
        text: "Contacting Gemini...",
      });

      const body = {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `You are a friendly assistant that speaks about ${profile.name}.\nContext:\n${contextString}`,
              },
            ],
          },
          {
            role: "user",
            parts: [{ text: trimmed }],
          },
        ],
      };

      const response = await fetch(`${GEMINI_ENDPOINT}?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${response.status} ${errorText}`);
      }

      const data = await response.json();
      const text =
        data?.candidates?.[0]?.content?.parts?.map((part: { text: string }) => part.text).join("") ??
        data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "I could not find an answer, but the local profile has plenty to explore.";

      addMessage({
        id: crypto.randomUUID(),
        role: "assistant",
        text,
      });
    } catch (error) {
      console.error(error);
      addMessage({
        id: crypto.randomUUID(),
        role: "assistant",
        text: `I could not reach Gemini. Here is what I know:\n${localAnswer(trimmed)}`,
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="chat" className="card chat-panel stack" aria-labelledby="chat-heading">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              border: "var(--outline) solid var(--ink)",
              background: "#c6f8ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              boxShadow: "2px 2px 0 0 var(--shadow)",
            }}
          >
            AI
          </div>
          <div style={{ fontWeight: 800 }} id="chat-heading">
            About Me, Ask Anything
          </div>
        </div>
      </div>

      <div className="caption">
        Responses render in your browser. If an environment Gemini API key is missing, I fall back to local answers.
      </div>

      <div ref={feedRef} className="chat-feed" aria-live="polite">
        {messages.map((message) => (
          <div key={message.id} className={`chat-message${message.role === "user" ? " mine" : ""}`}>
            {message.text}
          </div>
        ))}
        {pending && <div className="chat-meta">Preparing response...</div>}
      </div>

      <form ref={formRef} className="stack" onSubmit={handleSubmit} style={{ gap: "8px" }}>
        <div className="chat-input">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about my projects, stack, or experience. Press Enter to send, Shift+Enter for a new line."
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                formRef.current?.requestSubmit();
              }
            }}
          />
          <button type="submit" className="button" disabled={pending}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
};
