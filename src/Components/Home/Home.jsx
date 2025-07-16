import githubLogo from '../../assets/githubnew.png'
import './Home.css'
function Home() {
  return (
    <div id='home' className='home'>
      <h2> <span>I'm Ananthu,</span> 
      <br />Fullstack Software Developer</h2>
      <div className="contact-options">
        <ul className='icons-list'>
          
              <li>
                <a href="https://github.com/ananthu-m-01" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" className='icons' />
                </a>
              </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
