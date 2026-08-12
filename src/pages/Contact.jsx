import React from "react";

function Contact() {
  return (
    <section className="section">
      <div className="section-inner narrow contact-page">
        <p className="eyebrow">Get In Touch</p>
        <h1>Let's Connect</h1>
        <p className="page-intro">
          Whether you're a recruiter, a potential collaborator, or a business looking for a
          website, I'd love to hear from you.
        </p>
        <div className="contact-actions">
          <a
            href="https://www.linkedin.com/in/brianna-mclaurin-388518288/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Connect on LinkedIn
          </a>
          <a href="mailto:briannamclaurinn@gmail.com" className="btn btn-outline">
            briannamclaurinn@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;