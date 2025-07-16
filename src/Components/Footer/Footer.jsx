import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <p>
        © {currentYear} Ananthu M. All rights reserved. <br />
        Thank you for visiting my portfolio!
      </p>
    </footer>
  )
}

export default Footer
