import React from "react";
import { motion } from "framer-motion";
import Gallery from "./components/Gallery";
import "./App.css";

function Section({ title, children }) {
  return (
    <section className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <div>{children}</div>
    </section>
  );
}

function App() {
  return (
    <div>
      {/* HERO */}
      <header className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="IMG_4987.jpeg" alt="Brianna McLaurin" className="headshot" />
          <div className="hero-text">
            <h1>Brianna McLaurin</h1>
            <p className="tagline">
              Aspiring Software Architect • Frontend Developer • NCWIT Award Winner
            </p>
            <div className="buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a
                href="https://www.linkedin.com/in/brianna-mclaurin-388518288/"
                target="_blank"
                rel="noreferrer"
                className="btn secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ABOUT */}
      <Section title="About Me">
        <p>
          I’m a senior at Sarah Pyle Academy enrolled in the Twilight Program, and I’m passionate
          about building creative and impactful technology. Over the past two years, I’ve worked
          as a paid intern at Code Differently, leading frontend development teams and gaining
          experience with React, Java, Spring Boot, and MySQL. I also completed a summer internship
          at J.P. Morgan Chase, where I strengthened my Java skills and learned how large-scale
          systems operate. <br /><br />
          I’ve earned recognition including the NCWIT Delaware Award and top placements at Delaware
          BPA States. I’m excited to pursue a computer science degree and eventually become a
          software architect, building systems that make a difference in people’s everyday lives.
        </p>
      </Section>

      {/* PROJECTS */}
      <Section title="Projects" id="projects">
        <div className="project">
          <h3>Emoji Duel</h3>
          <p>
            A real-time multiplayer emoji guessing game built with React and Socket.io. Players
            compete to identify emojis as quickly as possible in timed rounds. I built the frontend
            interface, integrated WebSocket communication, and polished the UI for mobile.
          </p>
          <p className="tech">React • Node.js • Socket.io</p>
          <div className="links">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project">
          <h3>Internship Development Projects</h3>
          <p>
            During my two-year internship at Code Differently, I worked on full-stack applications
            as part of agile teams. I led a small group of interns, built responsive React interfaces,
            and integrated them with Java Spring Boot and MySQL backends.
          </p>
          <p className="tech">React • Spring Boot • MySQL</p>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience & Leadership">
        <ul>
          <li><strong>Code Differently</strong> — Paid Internship (2 yrs), led frontend teams</li>
          <li><strong>J.P. Morgan Chase</strong> — Tech Intern, Java development</li>
          <li><strong>BPA</strong> — 1st Place Computer Programming Concepts; 2nd Place Digital Communication & Design Concepts</li>
          <li><strong>Key Club</strong> — Vice President (2023), Webmaster (2024)</li>
          <li><strong>NCWIT Delaware Award Winner</strong></li>
        </ul>
      </Section>

      {/* GALLERY */}
      <Gallery />

      {/* CONTACT */}
      <Section title="Contact">
        <p>📧 briannamclaurinn@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/brianna-mclaurin-388518288/" target="https://www.linkedin.com/in/brianna-mclaurin-388518288/" rel="noreferrer">LinkedIn</a>{" "}
          |{" "}
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </Section>

      <footer>
        <p>© {new Date().getFullYear()} Brianna McLaurin</p>
      </footer>
    </div>
  );
}

export default App;