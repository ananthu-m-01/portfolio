import React from 'react'
import emailLogo from '../../assets/envelope.png'
import githubLogo from '../../assets/githubnew.png'
import './Home.css'
function Home() {
  return (
    <div id='home' className='home'>
      <h2> <span>I'm Ananthu,</span> 
      <br />Fullstack Software Developer</h2>
      <div className="contact-options">
        <ul className='icons-list'>
          <li><img src={githubLogo} alt=""  className='icons'/></li>
          <li><img src={emailLogo} alt=""  className='icons'/></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
