import React, { useState, useEffect } from "react";
import "../CSS/Hero.css";

const images = [
  process.env.PUBLIC_URL + "/images/Hero1.jpg",
  process.env.PUBLIC_URL + "/images/Hero2.jpg",
  process.env.PUBLIC_URL + "/images/Hero3.jpg",
  process.env.PUBLIC_URL + "/images/Hero4.jpg",
  process.env.PUBLIC_URL + "/images/Hero5.jpg",
  process.env.PUBLIC_URL + "/images/Hero6.jpg",
  process.env.PUBLIC_URL + "/images/Hero7.jpg",
  process.env.PUBLIC_URL + "/images/Hero8.jpg",
  process.env.PUBLIC_URL + "/images/Hero9.jpg",
  process.env.PUBLIC_URL + "/images/Hero10.jpg"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // change image every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content fade-in-up">
        <h1>Secure Your Family’s Future</h1>
        <p>
          Affordable funeral cover that gives peace of mind when it matters most.
        </p>
        <button className="hero-btn">Get Covered Today</button>
      </div>
    </section>
  );
}
