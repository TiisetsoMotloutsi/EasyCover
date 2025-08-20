import React from "react";
import "../CSS/Features.css";

export default function Features() {
  return (
    <section id="features" className="features">
      <h2>Why Choose EasyCover?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Affordable</h3>
          <p>Low monthly premiums that fit your budget.</p>
        </div>
        <div className="feature-card">
          <h3>Fast Payout</h3>
          <p>Claims processed quickly to support families in difficult times.</p>
        </div>
        <div className="feature-card">
          <h3>Trusted</h3>
          <p>Serving communities with care and reliability.</p>
        </div>
      </div>
    </section>
  );
}
