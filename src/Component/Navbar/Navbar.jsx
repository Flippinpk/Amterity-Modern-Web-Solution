import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/amt-logo.png';
import { VscThreeBars } from "react-icons/vsc";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar', 'navbar-expand-lg', 'navbar-background', 'fixed-top'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <>
      <nav className={navbarClasses.join(' ')}>
        
        <div className="container navbar-e">
          <div className="logo">
            <img className="nav-logo" src={logo} alt="logo" />
            
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <VscThreeBars />

          </button>
          <div className="collapse navbar-collapse navbar-e" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#AboutUs">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#PricingPage">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#ContactUs">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex mx-4" role="search">
            {/*               
                <button className="btn btn-outline-light mx-2" type="button">SignUp</button>
              <Link className="nav-link" to="/register">
              </Link>
              <Link className="nav-link" to="/login">
                <button className="btn btn-outline-light" type="button">Login</button>
              </Link> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
