import React from "react";
import "../CSS/Plans.css";

export default function Plans() {
  return (
    <section id="plans" className="plans">
      <h2>Our Funeral Cover Plans</h2>
      <div className="plans-grid">
        <div className="plan-card">
          <h3>Basic</h3>
          <p>R50 / month</p>
          <button>Choose Plan</button>
        </div>
        <div className="plan-card featured">
          <h3>Standard</h3>
          <p>R100 / month</p>
          <button>Choose Plan</button>
        </div>
        <div className="plan-card">
          <h3>Premium</h3>
          <p>R200 / month</p>
          <button>Choose Plan</button>
        </div>
      </div>
    </section>
  );
}
