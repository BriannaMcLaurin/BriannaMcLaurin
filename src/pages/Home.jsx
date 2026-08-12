import React from "react";
import { Link } from "react-router-dom";

const CREDENTIALS = [
  "NCWIT Delaware Award & National Honorable Mention",
  "BPA State Champion",
  "J.P. Morgan Chase",
  "Code Differently",
  "University of Delaware",
];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Full-Stack Developer</p>
            <h1>Brianna McLaurin</h1>
            <p className="hero-sub">
              Computer Science student at the University of Delaware, building custom web
              experiences for businesses and brands.
            </p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn btn-primary">
                View My Portfolio
              </Link>
              <Link to="/services" className="btn btn-outline">
                Web Design Services
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-photo-frame">
              <img src="senior pic.jpg" alt="Brianna McLaurin" />
            </div>
          </div>
        </div>
      </section>

      <section className="credentials-strip">
        <div className="credentials-inner">
          {CREDENTIALS.map((c) => (
            <span key={c} className="credential-pill">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-inner narrow">
          <p className="eyebrow">About</p>
          <h2>A developer's foundation, built early</h2>
          <p>
            I'm a first-year Computer Science student at the University of Delaware, building on
            two years of hands-on software experience before starting college. As a paid intern at
            Code Differently, I contributed to full-stack development teams using React, Java,
            Spring Boot, and MySQL. I also completed a paid summer internship at J.P. Morgan Chase,
            strengthening my Java skills on a scrum team building an internally-used JPMC
            application.
          </p>
          <p>
            I also design and build custom websites and web applications for businesses — from
            booking systems to admin dashboards. I've earned recognition including the NCWIT
            Delaware Award and top placements at Delaware's BPA State competition.
          </p>
          <Link to="/services" className="text-link">
            Learn about my web design services →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;