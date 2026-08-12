import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <p className="footer-brand">Brianna McLaurin</p>
          <p className="footer-blurb">
            Computer Science student at the University of Delaware and full-stack developer
            building custom websites and web applications for businesses.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Quick Links</p>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/services">Web Design Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Get In Touch</p>
          <a href="mailto:briannamclaurinn@gmail.com">briannamclaurinn@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/brianna-mclaurin-388518288/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Brianna McLaurin. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;