import React from 'react'
import './Skills.css'
import firebase from '../../assets/firebase.png'
import bootstrap from '../../assets/bootstrap.png'
import rest from '../../assets/rest.png'
import postman from '../../assets/postman.png'
import github from '../../assets/github.png'
import typescript from '../../assets/typescript.png'
import redux from '../../assets/redux.png'
import Info from '../Info/Info'

const Skills = () => {
  return (
   <>
          
          <Info/>
         <section className="section3 flex" id="Skills">
         <h1 className="skillTitle">Skills</h1>
        
        <div className="skills-container flex">
          <div className="flex">
            <i className="fa-brands fa-html5"></i>
            <span>HTML</span>
          </div>

          <div className="flex">
            <i className="fa-brands fa-css3"></i>
            <span>CSS</span>
          </div>
          
          <div className="flex">
            <i className="fa-brands fa-sass"></i>
            <span>Sass</span>
          </div>

          <div className="flex">
            <img src={bootstrap}  alt=""/>
            <span>Bootstrap</span>
          </div>

          <div className="flex">
            <i className="fa-brands fa-js"></i>
            <span>JavaScript</span>
          </div>

          <div className="flex">
            <i className="fa-brands fa-react"></i>
            <span>React</span>
          </div>

          <div className="flex">
          <img src={typescript}  alt=""/>
            <span>TypeScript</span>
          </div>

          <div className="flex">
          <img src={redux}  alt=""/>
            <span>Redux</span>
          </div>

          <div className="flex">
            <img src={firebase}  alt=""/>
            <span>Firebase</span>
          </div>


          <div className="flex">
            <img src={rest}  alt="" />
            <span>RestAPI</span>
          </div>

          <div className="flex">
            <img src={postman}  alt=""/>
            <span>Postman</span>
          </div>

          <div className="flex">
            <img src={github}  alt=""/>
            <span>Github</span>
          </div>
        </div>

      </section>
   </>
  )
}

export default Skills