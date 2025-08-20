import React from "react";
import "../CSS/HeroCarouselSmooth.css";

const images = [
  process.env.PUBLIC_URL + "/images/Hero1.jpg",
  process.env.PUBLIC_URL + "/images/Hero2.jpg",
  process.env.PUBLIC_URL + "/images/Hero3.jpg",
  process.env.PUBLIC_URL + "/images/Hero6.jpg",
  process.env.PUBLIC_URL + "/images/Hero8.jpg",
  process.env.PUBLIC_URL + "/images/Hero9.jpg",
  process.env.PUBLIC_URL + "/images/Hero11.jpg",
  process.env.PUBLIC_URL + "/images/Hero12.jpg",
  process.env.PUBLIC_URL + "/images/Hero13.jpg",
  process.env.PUBLIC_URL + "/images/Hero14.jpg",
  process.env.PUBLIC_URL + "/images/Hero15.jpg",
  process.env.PUBLIC_URL + "/images/Hero16.jpg",
  process.env.PUBLIC_URL + "/images/Hero17.jpg",
  process.env.PUBLIC_URL + "/images/Hero18.jpg",
  process.env.PUBLIC_URL + "/images/Hero19.jpg",
  process.env.PUBLIC_URL + "/images/Hero20.jpg"
];

export default function HeroCarouselElegant() {
  return (
    <section className="hero-carousel-elegant">
      <div className="carousel-track">
        {images.concat(images).map((img, idx) => (
          <div
            key={idx}
            className="carousel-card"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="carousel-text">
        Your memories will live forever
      </div>
    </section>
  );
}
