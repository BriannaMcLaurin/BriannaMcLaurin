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
              Tech Lover • NCWIT Award Winner
            </p>
            <div className="buttons">
              <a href="https://github.com/BriannaMcLaurin" className="btn">View My Work</a>
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

      
      <Section title="About Me">
        <p>
          I’m a senior at Glasgow High School, and I’m passionate
          about building creative and impactful technology. Over the past two years, I’ve worked
          as a paid intern at Code Differently, partipating in full-stack development teams and gaining
          experience with React, Java, Spring Boot, and MySQL. I also completed a paid summer internship
          at J.P. Morgan Chase, where I strengthened my Java skills and worked in a scrum team to contribute 
          to a internal use JPMC application. <br /><br />
          I’ve earned recognition including the NCWIT Delaware Award and top placements at Delaware's
          BPA States.
        </p>
      </Section>

      {/* PROJECTS */}
      <Section title="Projects" id="projects">
        <div className="project">
          <h3>Emoji Duel</h3>
          <p>
            A real-time multiplayer emoji guessing game built with React and Socket.io. Players
            compete to identify emojis as quickly as possible in timed rounds. I built the frontend
            interface, integrated Firebase Database, and polished the UI for mobile.
          </p>
          <p className="tech">React • Firebase</p>
          <div className="links">
            <a href="https://mock-client-project-emojiduel-fzji3scp1.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/BriannaMcLaurin/mock-client-project-emojiduel" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="project">
          <h3>Wordle with a twist</h3>
          <p>
           This is a project I made during my time at Code Differently. 
           It is a wordle game with a twist. Just like regular wordle, you have to guess the word in 6 tries. But, in this game, after 3 attepmts you get a hint. 
           The hint is the defintion of the word.
          </p>
          <p className="tech">React</p>
          <div className="links">
            <a href="https://mock-client-project-emojiduel-fzji3scp1.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/BriannaMcLaurin/Wordle-project" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="project">
          <h3>Stagefright</h3>
          <p>
            This is a mock website I made for the 2025 Delaware BPA State Competition.
            It is a mock website for a Rock Band. 
            The website consist of a home page, an about page, a tour dates page, and a contact page
            with a top nav bar and a footer.
          </p>
          <p className="tech">React • Firebase</p>
          <div className="links">
            <a href="https://mock-client-project-emojiduel-fzji3scp1.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="https://github.com/BriiMariee/StageFright" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section title="Experience & Leadership">
        <ul>
          <li><strong>Code Differently</strong> — Paid Internship (2 yrs)</li>
          <li><strong>J.P. Morgan Chase</strong> — Tech Intern, Java development</li>
          <li><strong>BPA</strong> — 1st Place Computer Programming Concepts; 2nd Place Digital Communication & Design Concepts</li>
          <li><strong>DECA</strong> — Member</li>
          <li><strong>Key Club</strong> — Vice President (2023, 2025), Webmaster (2024)</li>
          <li><strong>NCWIT Delaware Award Winner</strong></li>
        </ul>
      </Section>

      {/* GALLERY */}
      <Gallery />

      {/* CONTACT */}
      <Section title="Contact">
        <p>📧 briannamclaurinn@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/brianna-mclaurin-388518288/" target="_blank" rel="noreferrer">LinkedIn</a>{" "}
          |{" "}
          <a href="https://github.com/BriannaMcLaurin" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </Section>

      <footer>
        <p>© {new Date().getFullYear()} Brianna McLaurin</p>
      </footer>
    </div>
  );
}

export default App;