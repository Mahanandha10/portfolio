import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BrowserRouter as Router } from 'react-router-dom';
import menu from '../../img/menu-icon.png';
import './Navbar1.css';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

   
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Router>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
         <li className="portfolio-list-item">
            <Link  activeClass="active" to="Navbar" spy={true} smooth={true} offset={-500}>
              My portfolio
            </Link>
            </li>
        <ul className={mobileMenu ? '' : 'mobileicon'}>
       
          <li>
            <Link activeClass="active" to="Intro" spy={true} smooth={true} offset={-200}>
              Home
            </Link>
          </li>
          <li>
            <Link to="services" spy={true} smooth={true} offset={-100}>
              Services
            </Link>
          </li>
          <li>
            <Link to="works" spy={true} smooth={true} offset={0}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true} offset={-100}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="testimonial" spy={true} smooth={true} offset={-100}>
              Testimonial
            </Link>
          </li>
          {/* Additional links from the first Navbar component */}
          <li>
            <Link to="contact" spy={true} smooth={true} offset={-100}>
              Contact
            </Link>
          </li>
         
        </ul>
        <img src={menu} alt="" className="menuicon" onClick={toggleMenu} />
      </nav>
    </Router>
  );
};

export default Navbar;
