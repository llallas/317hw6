import SpeakerCard from "./components/SpeakerCard";
import "./App.css";

function App() {
  const speakers = [
    {
      id: 1,
      name: "Alex Morgan",
      jobTitle: "Senior Frontend Engineer",
      company: "Indy Tech Labs",
      talkTitle: "Building Resilient UI with React Hooks",
      talkSummary:
        "Custom hooks can clean up your codebase and share state logic seamlessly across complex components. In this talk, we look at real-world refactoring strategies for large production applications.",
      topics: [
        "Extracting complex logic into custom reusable hooks",
        "Avoiding common memory leak pitfalls with useEffect",
        "Optimizing render cycles with useCallback and useMemo",
      ],
      headshot:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      name: "Marcus Vance",
      jobTitle: "Design Systems Lead",
      company: "Circle City Digital",
      talkTitle: "CSS Architecture at Scale",
      talkSummary:
        "Managing CSS in massive component libraries can quickly turn into a specificity nightmare. Learn how modern modular techniques keep your styles maintainable and clean.",
      topics: [
        "Structuring modular CSS alongside React components",
        "Balancing CSS modules, utility classes, and variables",
        "Enforcing accessibility and design consistency",
      ],
      headshot:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      name: "Sarah Lin",
      jobTitle: "Staff Software Architect",
      company: "Midwest Cloud Solutions",
      talkTitle: "Vite, ESM, and the Future of Tooling",
      talkSummary:
        "Webpack served us well for years, but native ESM build tools like Vite have completely transformed our development feedback loop. Come see how instant server start works under the hood.",
      topics: [
        "Understanding browser native ES modules in development",
        "How Vite achieves lightning-fast Hot Module Replacement",
        "Configuring production builds with Rollup",
      ],
      headshot:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="app-container">
      <header className="event-header">
        <span className="meetup-badge">Circle City Dev Night</span>
        <h1 className="event-title">Monthly Speaker Spotlight</h1>
        <p className="event-details">
          <span>📅 Thursday, November 14th @ 6:30 PM</span> •
          <span>📍 High Alpha Innovation Studio, Indianapolis, IN</span>
        </p>
      </header>

      <main className="speakers-grid">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </main>

      <footer className="app-footer">
        <p>
          Circle City Dev Night • Built with React & Vite
        </p>
      </footer>
    </div>
  );
}

export default App;
