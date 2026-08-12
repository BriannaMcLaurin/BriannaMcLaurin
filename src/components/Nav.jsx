import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Web Design Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          Brianna McLaurin
        </NavLink>

        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;