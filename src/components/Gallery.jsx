import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

const images = [
  { src: "IMG_0235.jpeg", caption: "1st Place, Computer Programming Concepts — BPA States" },
  { src: "IMG_0234.jpeg", caption: "2025 BPA Nationals, Orlando, FL" },
  { src: "IMG_0236.jpeg", caption: "NCWIT Delaware Award Winner" },
  { src: "IMG_0237.jpeg", caption: "National Honor Society Induction 2024" },
  { src: "IMG_0287.jpeg", caption: "Key Club District Convention 2025" },
  { src: "IMG_6367.HEIC.jpeg", caption: "JPMorgan Chase Internship 2025" },
  { src: "IMG_3525.jpeg", caption: "DECA Delaware States 2024" },
  { src: "IMG_3502.jpeg", caption: "DECA Delaware States 2024" },
  { src: "ic3 certification.jpg", caption: "IC3 Digital Literacy Certification 2023" },
  { src: "Java hackerRank.png", caption: "Java HackerRank Certification 2025" },
  { src: "Quickbook Cert.jpeg", caption: "Intuit QuickBooks Online Certified User 2025" },
];

function arrowKeyHandler(onClick) {
  return (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };
}

function NextArrow({ onClick }) {
  return (
    <div
      className="arrow next"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Next slide"
      onKeyDown={arrowKeyHandler(onClick)}
    >
      <ChevronRight size={20} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="arrow prev"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Previous slide"
      onKeyDown={arrowKeyHandler(onClick)}
    >
      <ChevronLeft size={20} />
    </div>
  );
}

function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <div className="gallery-wrap">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <div className="slide-frame">
              <img src={image.src} alt={image.caption} />
            </div>
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Gallery;