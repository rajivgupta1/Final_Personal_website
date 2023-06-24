import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
   <>
     <section className="section6 flex" id="contact">
        <h1 className="title">Get in Touch</h1>

        <div className="socials flex">
          <a href="https://www.linkedin.com/in/rajiv-gupta-284118174/"> <i className="fa-brands fa-linkedin"> </i></a>
          <a href="https://www.github.com/rajivgupta1 "><i className="fa-brands fa-github"></i></a> 
          <a href='https://www.facebook.com'> <i className="fa-brands fa-facebook"></i></a>  
          <a href='https://twitter.com'> <i className="fa-brands fa-twitter"></i></a> 

        </div>

        <h1 className="or">OR</h1>
           <div className="email-section flex">
          <p>Reach out over Email</p>
          <div className="email">
          <a href="mailto:rajiv.gupta9966@gmail.com">rajiv.gupta9966@gmail.com<i className="fa-solid fa-paper-plane " style={{ color: "white" }} ></i></a>

          </div>
        </div>

      </section>
   </>
  )
}

export default Contacts