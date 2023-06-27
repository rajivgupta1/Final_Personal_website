import React from 'react'
import rajiv from "../../assets/rambo2.jpg"
import './Hero.css'

const Hero = () => {
  return (
    <>
        <section className="grid section1 " id="home">
        <div className="left">
          <img src={rajiv}  alt=""/>
        </div>
        <div className="right flex">
        <div>
          <h2 className="name"> Rajiv Gupta</h2>
          <p className="tag">Frontend Developer</p>
        </div>

        {/* <a href="" download=""> */}

        <a href="rajiv-resume-frontend-developer.pdf" download="rajiv-resume-frontend-developer.pdf">
            <button className="button">
            <div className='download'>
            <p>  Download resume </p>
              <i className="fa-solid fa-download"></i>

          </div>

            </button>   
          </a>
  
        </div>
      </section>
    </>
  )
}

export default Hero
