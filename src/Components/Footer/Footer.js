import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
         <footer>
        <div className="footer-container flex">
          <div className="footer-top flex">
            <div className='left'>
              <h3>LINKS</h3>
              <ul className="flex">
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/#Skills">Skills</a>
                </li>
                <li>
                <a href="/#Projects">Projects</a>
                  </li>
                <li>
                <a href="/#about">About</a>

                  </li>
                <li>
                <a href="/#contact">Contact</a>

                  </li>
              </ul>
            </div>

            <div className='right'>
              <h3>EXTERNAL LINKS</h3>
              <ul className="flex"> 
                <li>
                <a href="https://www.linkedin.com/in/rajiv-gupta-284118174">LinkedIn</a>
                  </li>
                <li>
                <a href="https://github.com/rajivgupta1">GitHub</a></li>
                 <li>
                  <a href="https://www.facebook.com">Facebook</a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com">Instagram</a>
                  </li>
                  <li>
                  <a href="https://www.twitter.com">Twitter</a>
                  </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom flex">
            <h1>Rajiv | Full_Stack Developer</h1>

            <p>&copy; | All right reserved</p>
              
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer