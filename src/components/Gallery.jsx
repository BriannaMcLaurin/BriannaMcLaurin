import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // nice modern arrows
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";

const images = [
  { src: "IMG_0235.jpeg", caption: "1st Place, Computer Programming Concepts - BPA States" },
  { src: "IMG_0234.jpeg", caption: "2025 BPA Nationals, Orlando, FL" },
  { src: "IMG_0236.jpeg", caption: "NCWIT Delaware Award Winner" },
  { src: "IMG_0237.jpeg", caption: "National Honor Society Induction 2024" },
  { src: "IMG_0287.jpeg", caption: "Key Club District Convention 2025" },
  { src: "IMG_6367.HEIC.jpeg", caption: "JPMorgan Chasr Internship 2025" },
  { src: "IMG_3525.jpeg", caption: "DECA Delaware States 2024" },
  { src: "IMG_3502.jpeg", caption: "DECA Delaware States 2024" },
  { src: "ic3 certification.jpg", caption: "IC3 Digital Literacy Certification 2023" },
  { src: "Java hackerRank.png", caption: "Java HackerRank Certification 2025" },
];

// Custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <ChevronRight size={28} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <ChevronLeft size={28} />
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
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <section className="gallery-section">
      <h2>Achievements</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={image.caption} />
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Gallery;
