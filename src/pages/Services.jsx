import React from "react";
import InquiryForm from "../components/InquiryForm";

const CASE_STUDIES = [
  {
    name: "Careful Driving LLC",
    description:
      "Full-stack car rental platform with a 5-step booking flow, ID verification, and integrated payments.",
    demo: null,
  },
  {
    name: "nexus.",
    description:
      "Dark-themed social networking platform with live messaging, notifications, and network discovery.",
    demo: null,
  },
  {
    name: "Youngs Construction Inc.",
    description: "Multi-page marketing site for a general contracting client with custom page routing.",
    demo: null,
  },
  {
    name: "EduStream",
    description: "Educational video platform for ~10,000 users, with an admin panel for analytics and content management.",
    demo: null,
  },
  {
    name: "Stagefright",
    description: "Mock band website built for the 2025 Delaware BPA State Competition.",
    demo: "https://stage-fright-flax.vercel.app/",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "$450",
    tag: null,
    features: [
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic on-page SEO",
      "1 round of revisions",
    ],
  },
  {
    name: "Business",
    price: "$900",
    tag: "Most popular",
    features: [
      "Up to 6 pages",
      "Custom design & branding",
      "Booking or inquiry form",
      "Photo gallery",
      "2 rounds of revisions",
      "30 days of post-launch support",
    ],
  },
  {
    name: "Premium",
    price: "From $1,500",
    tag: null,
    features: [
      "Unlimited pages",
      "Full custom web app",
      "Database & backend integration",
      "Admin dashboard",
      "Priority support",
      "60 days of post-launch support",
    ],
  },
];

const ADD_ONS = [
  { name: "Extra page", price: "$75 each" },
  { name: "E-commerce / online store", price: "From $350" },
  { name: "Booking & payment integration", price: "$250" },
  { name: "Admin dashboard", price: "$300" },
  { name: "Monthly maintenance & updates", price: "$50/mo" },
  { name: "Rush delivery (under 2 weeks)", price: "$150" },
];

function Services() {
  return (
    <>
      <section className="section">
        <div className="section-inner narrow">
          <p className="eyebrow">For Businesses & Brands</p>
          <h1>Web Design Services</h1>
          <p className="page-intro">
            I design and build custom websites and web applications for small businesses —
            booking flows, payment integration, admin dashboards, and everything in between. Tell
            me what you're looking for and I'll follow up with a scope and pricing.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-inner">
          <p className="eyebrow">Selected Work</p>
          <h2>Case Studies</h2>
          <div className="case-grid">
            {CASE_STUDIES.map((c) => (
              <div className="case-card" key={c.name}>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                {c.demo ? (
                  <a href={c.demo} target="_blank" rel="noreferrer" className="text-link">
                    View Demo →
                  </a>
                ) : (
                  <span className="case-note">Demo available on request</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <p className="eyebrow">Packages & Add-Ons</p>
          <h2>Pricing</h2>
          <div className="pricing-grid">
            {PACKAGES.map((pkg) => (
              <div className={`pricing-card ${pkg.tag ? "pricing-card-featured" : ""}`} key={pkg.name}>
                {pkg.tag && <span className="pricing-tag">{pkg.tag}</span>}
                <h3>{pkg.name}</h3>
                <p className="pricing-price">{pkg.price}</p>
                <ul>
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="addons">
            <h3>Add-Ons</h3>
            <ul className="addons-list">
              {ADD_ONS.map((a) => (
                <li key={a.name}>
                  <span>{a.name}</span>
                  <span className="addons-price">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="section-inner narrow">
          <p className="eyebrow">Get Started</p>
          <h2>Start a Project</h2>
          <p className="page-intro">
            Share a few details about what you need and I'll get back to you with a scope and
            pricing.
          </p>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}

export default Services;