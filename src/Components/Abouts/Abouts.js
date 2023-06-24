import React from 'react'
import './Abouts.css'
import rajiv from '../../assets/rambo2.jpg'


const Abouts = () => {
  return (
    <>
     <section className="section5 flex" id="about">
        <h1 className="about-title">About Me</h1>

        <div className="about-container flex">

          <div className="left flex">
            <div className="bg"></div>
            <img src={rajiv} alt=""/>
          </div>

          <div className="right flex">
            <h1>Rajiv Gupta</h1>
            <p className='Description'>It's me Rajiv.I grew up in Nepal and currently located in sydney, Australia. I am skilled in building scalable and high-performance web applications using modern front-end technologies.My technical skill set includes proficiency in ReactJS, Redux,Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, Git and GitHub. I have a deep understanding of the React component lifecycle, state management, and performance optimization techniques. I am also familiar with popular React libraries such as Material-UI, React Router, and Axios.</p>
            <p>Sydney,Australia</p>

            <a href="mailto:rajiv.gupta9966@gmail.com">Connect with me</a>

            <div className="flex">
              <div className="tag">Interest</div>

              <div className='intest'>
                <span>Coding</span>
                <span>Reading</span>
                <span>Sports</span>
                <span>Traveling</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Abouts