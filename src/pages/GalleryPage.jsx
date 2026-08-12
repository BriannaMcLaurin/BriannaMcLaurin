import React from "react";
import Gallery from "../components/Gallery";

function GalleryPage() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="eyebrow">Recognition</p>
        <h1>Gallery</h1>
        <p className="page-intro">Moments from competitions, internships, and certifications.</p>
        <Gallery />
      </div>
    </section>
  );
}

export default GalleryPage;