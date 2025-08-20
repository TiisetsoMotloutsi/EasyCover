import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h4>About Easy Cover</h4>
          <ul>
            <li><a href="/about">More About Easy Cover</a></li>
            <li><a href="/mission-values">Our Mission & Values</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/testimonials">Testimonials / Reviews</a></li>
          </ul>
        </div>

        {/* Personal Section */}
        <div className="footer-section">
          <h4>Personal</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/goals">Your Goals</a></li>
            <li><a href="/solutions">Our Solutions</a></li>
            <li><a href="/rewards">Easy Cover Rewards</a></li>
            <li><a href="/education">Financial Education</a></li>
          </ul>
        </div>

        {/* Digital Solutions Section */}
        <div className="footer-section">
          <h4>Digital Solutions</h4>
          <ul>
            <li><a href="/digital">Digital Solutions</a></li>
            <li><a href="/app">Download Our App (iOS / Android)</a></li>
            <li><a href="/blog">Blog / Articles</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/branch-locator">Branch Locator</a></li>
            <li><a href="/submit-claim">Submit a Claim</a></li>
            <li><a href="/complaints-feedback">Complaints & Feedback</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            Facebook <span className="social-icon">📘</span>
               </a>
               <a href="https://twitter.com" target="_blank" rel="noreferrer">
                 Twitter <span className="social-icon">🐦</span>
               </a>
               <a href="https://youtube.com" target="_blank" rel="noreferrer">
                 YouTube <span className="social-icon">▶️</span>
               </a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer">
                 Instagram <span className="social-icon">📷</span>
               </a>
               <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                 LinkedIn <span className="social-icon">💼</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Easy Cover. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
