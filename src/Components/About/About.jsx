import AnchorLink from 'react-anchor-link-smooth-scroll'
import ProfileImage from '../../assets/user-img.png'
import './About.css'
function About() {
  return (
    <div id='about' className='about-me'>
      <img src={ProfileImage} alt="" className='profile-image'/>
      <div className='about-text'>
        <h3>ABOUT ME</h3>
        <br />
        <p>I am a Full Stack developer with industrial experience in building websites and web applications. I specialize in JavaScript, React, Node.js, Express, MongoDB, and Java. I have a strong foundation in both front-end and back-end development, allowing me to create seamless and efficient web solutions.I am passionate about staying up-to-date with the latest technologies and best practices in web development, always striving to improve my skills and deliver high-quality work.</p>
        <br />
        <div className="about-button">
          <div className="contact-me"><AnchorLink className='anchor-link' offset={50} href="#contact">Contact</AnchorLink></div>
        </div>
      </div>
    </div>
  )
}

export default About
