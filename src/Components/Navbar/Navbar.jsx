import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
function Navbar() {
  return (
      <div className="navbar">
        <div className="name">
          ANANTHU M
        </div>
        <ul className='menu-bar'>
          <li><AnchorLink className='anchor-link' href="#home" >Home</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#about" >About Me</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#projects" >Projects</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#skills" >Skills</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href="#education">Education</AnchorLink></li>
        </ul>
        <div className="contact"><AnchorLink className='anchor-link' offset={50} href="#contact">Contact</AnchorLink></div>
      </div>
  )
}

export default Navbar
