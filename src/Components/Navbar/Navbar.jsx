import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="name">ANANTHU M</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Desktop Menu */}
      <ul className={`menu-bar ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><AnchorLink className='anchor-link' href="#home">Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href="#about">About Me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href="#projects">Projects</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href="#skills">Skills</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href="#education">Education</AnchorLink></li>
        <li className='contact-link'><AnchorLink className='anchor-link' offset={50} href="#contact">Contact</AnchorLink></li>
      </ul>
    </div>
  );
}

export default Navbar;
