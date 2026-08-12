import React from "react";

const PROJECTS = [
  {
    name: "Emoji Duel",
    description:
      "A real-time multiplayer emoji guessing game. Players race to identify emojis correctly in timed rounds. I built the frontend interface, integrated the Firebase database, and polished the UI for mobile.",
    stack: ["React", "Firebase"],
    demo: "https://mock-client-project-emojiduel-fzji3scp1.vercel.app/",
  },
  {
    name: "Wordle, with a Twist",
    description:
      "Built during my time at Code Differently. Same 6-guess format as Wordle, but after 3 attempts you unlock a hint: the word's definition. Frontend-only project.",
    stack: ["React"],
    demo: "https://wordle-project-mocha.vercel.app/",
  },
  {
    name: "Stagefright",
    description:
      "A mock band website built for the 2025 Delaware BPA State Competition — home, about, tour dates, and contact pages with a shared nav bar and footer.",
    stack: ["React", "Firebase"],
    demo: "https://stage-fright-flax.vercel.app/",
  },
];

function Portfolio() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="eyebrow">Portfolio</p>
        <h1>Personal Projects</h1>
        <p className="page-intro">
          A selection of projects I've built to sharpen my skills — from real-time multiplayer
          games to frontend puzzles. For custom client and business work, see{" "}
          <a href="/services">Web Design Services</a>.
        </p>

        <div className="project-grid">
          {PROJECTS.map((p) => (
            <article className="project-card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="tech-row">
                {p.stack.map((s) => (
                  <span key={s} className="tech-pill">
                    {s}
                  </span>
                ))}
              </div>
              <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                View Live Demo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;