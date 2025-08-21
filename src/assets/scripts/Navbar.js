import React from 'react';
import './Navbar.css';
import img from './2025.png'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
         <img src={img} alt="Logo" class="logo"/>
      </div>

      <div className="navBar-links">  
        <ul className="navbar-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#services" className="nav-link">Our Services</a>
            <a href="#plans" className="nav-link">Funeral Plans</a>
            <a href="#branches" className="nav-link">Branches</a>
            <a href="#contact" className="nav-link">Contact Us</a>         
        </ul> 
      </div>

      <div className="button">
        <button>Get Cover</button>

      </div>

      
      
      <div className="heading"> 
        <h2>Welcome to Our Funeral Cover, Home of</h2>
        <p>Wings of Comfort, Halos of Remembrance</p>
      </div>

    </nav>
  );
};

export default Navbar;
