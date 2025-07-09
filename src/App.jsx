import React from 'react'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Education from './Components/Education/Education.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Skills from './Components/Skills/Skills.jsx'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
