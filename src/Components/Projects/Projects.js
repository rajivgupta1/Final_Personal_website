import React from 'react'
import './Projects.css'
import Cocktail from '../../assets/cocktail.png'
import movieapi from '../../assets/movieapi.png'
import tracker from '../../assets/tracker.png'
import calculator from '../../assets/calculator.png'
import library from '../../assets/library.png'

import { useState,useEffect,useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const initaldata =[

 {
  title :"Expenses-Tracker ",
  date :"22 Mar 2023",
  description:"Expenses-tracker is a website designed to help users keep track of their expenses. It provides a platform where users can input their income and expenses, categorize them, and view their spending patterns over time.",
  websiteurl:"https://expenses-tracker-murex-ten.vercel.app/",
  giturl:"https://github.com/naginshrestha/Expenses-Tracker",
  image:{tracker}
  
 },
 {
  title :"Expenses-Tracker ",
  date :"22 Mar 2023",
  description:"Expenses-tracker is a website designed to help users keep track of their expenses. It provides a platform where users can input their income and expenses, categorize them, and view their spending patterns over time.",
  websiteurl:"https://expenses-tracker-murex-ten.vercel.app/",
  giturl:"https://github.com/naginshrestha/Expenses-Tracker",
  image:{tracker}
  
 },
 {
  title :"Expenses-Tracker ",
  date :"22 Mar 2023",
  description:"Expenses-tracker is a website designed to help users keep track of their expenses. It provides a platform where users can input their income and expenses, categorize them, and view their spending patterns over time.",
  websiteurl:"https://expenses-tracker-murex-ten.vercel.app/",
  giturl:"https://github.com/naginshrestha/Expenses-Tracker",
  image:{tracker}
  
 },
 {
  title :"Expenses-Tracker ",
  date :"22 Mar 2023",
  description:"Expenses-tracker is a website designed to help users keep track of their expenses. It provides a platform where users can input their income and expenses, categorize them, and view their spending patterns over time.",
  websiteurl:"https://expenses-tracker-murex-ten.vercel.app/",
  giturl:"https://github.com/naginshrestha/Expenses-Tracker",
  image:{tracker}
  
 },


]

const Projects = () => {
 
  const [data,setData] =useState(initaldata)

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
   <> 
   <div className='proj'>
   <h1 className="ProjTitle ">Projects</h1>

   </div>


<Carousel   swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  autoPlaySpeed={1000}
  transitionDuration={500}
  //removeArrowOnDeviceType={["tablet", "mobile"]}

>

<section className="section4 flex " id="Projects">
       

       <div className="projects-container grid">

       <div className="project-card flex">
         <div className="topimg">
           <img src={library} alt=""/>
         </div>

         <div className="buttontitle">
         <p className='title'>Digital Library </p>
           <p className='date'>15 April 2023</p>
           <p className="description">Designed and developed a digital library website using React and Redux, allowing users to access and search for digital resources such as books.</p>

           <div className='sites'>
            
             <div className='websitefrm' onClick={(e)=> window.open("https://digital-library-blush.vercel.app/", "_blank")}>
            
              <span>
              <a className='textweb'>Website</a>&nbsp;&nbsp;
              <i class="fa-solid fa-globe"></i>
               </span> 
          
             </div>
             
             <div className='githubicon'>
               <a href='https://github.com/naginshrestha/Digital-library'>
               <i class="fa-brands fa-github"></i>
               </a>
             
             </div>

           </div>
         </div>
       </div>


     </div>
     </section>

      <section className="section4 flex " id="Projects">
       

        <div className="projects-container grid">

        <div className="project-card flex">
          <div className="topimg">
            <img src={tracker} alt=""/>
          </div>

          <div className="buttontitle">
          <p className='title'>Expenses-Tracker </p>
            <p className='date'>22 Mar 2023</p>
            <p className="description">Expenses-tracker is a website designed to help users keep track of their expenses. It provides a platform where users can input their income and expenses, categorize them, and view their spending patterns over time.</p>

            <div className='sites'>
             
              <div className='websitefrm' onClick={(e)=> window.open("https://expenses-tracker-murex-ten.vercel.app/", "_blank")}>
             
               <span>
               <a className='textweb'>Website</a>&nbsp;&nbsp;
               <i class="fa-solid fa-globe"></i>
                </span> 
           
              </div>
              
              <div className='githubicon'>
                <a href='https://github.com/naginshrestha/Expenses-Tracker'>
                <i class="fa-brands fa-github"></i>
                </a>
              
              </div>

            </div>
          </div>
        </div>


      </div>
      </section>

      <section className="section4 flex " id="Projects"> 

       <div className="projects-container grid">

       <div className="project-card flex">
         <div className="topimg">
           <img src={Cocktail} alt=""/>
         </div>

         <div className="buttontitle">
         <p className='title'>Cocktails</p>
           <p className='date'>22 feb 2023</p>
           <p className="description">This website provide users with a vast collection of cocktail recipes and related data. The website may include features such as a search bar, filters for browsing by various criteriaand detailed recipe page.</p>

           <div className='sites'>
            
             <div className='websitefrm' onClick={(e)=> window.open("https://cocktails-seven-sepia.vercel.app/", "_blank")}>
            
              <span>
              <a className='textweb'>Website</a>&nbsp;&nbsp;
              <i class="fa-solid fa-globe"></i>
               </span> 
          
             </div>
             
             <div className='githubicon'>
               <a href='https://github.com/naginshrestha/cocktails'>
               <i class="fa-brands fa-github"></i>
               </a>
             
             </div>

           </div>
         </div>
       </div>


     </div>
     </section>

     <section className="section4 flex " id="Projects">
       

       <div className="projects-container grid">

       <div className="project-card flex">
         <div className="topimg">
           <img src={movieapi} alt=""/>
         </div>

         <div className="buttontitle">
         <p className='title'>Movie Api  </p>
           <p className='date'>18 feb 2023</p>
           <p className="description">This website allows users to search and browse through a vast library of movies, TV shows, and other video content.The website includes a user interface with a search bar and filters for browsing movies by title.</p>

           <div className='sites'>
            
             <div className='websitefrm' onClick={(e)=> window.open("https://searchmovieapi.vercel.app/", "_blank")}>
            
              <span>
              <a className='textweb'>Website</a>&nbsp;&nbsp;
              <i class="fa-solid fa-globe"></i>
               </span> 
          
             </div>
             
             <div className='githubicon'>
               <a href='https://github.com/naginshrestha/searchmovieapi'>
               <i class="fa-brands fa-github"></i>
               </a>
             
             </div>

           </div>
         </div>
       </div>


     </div>
     </section>

     <section className="section4 flex " id="Projects">
       

       <div className="projects-container grid">

       <div className="project-card flex">
         <div className="topimg">
           <img src={calculator} alt=""/>
         </div>

         <div className="buttontitle">
         <p className='title'>Calculator</p>
           <p className='date'>6 feb 2023</p>
           <p className="description">This website allows users to perform basic mathematical operations.The website includes a user interface with buttons for numbers, decimal point, and mathematical operators such as addition, subtraction, multiplication, and division.</p>

           <div className='sites'>
            
             <div className='websitefrm' onClick={(e)=> window.open("https://calculator-js-gules.vercel.app/", "_blank")}>
            
              <span>
              <a className='textweb'>Website</a>&nbsp;&nbsp;
              <i class="fa-solid fa-globe"></i>
               </span> 
          
             </div>
             
             <div className='githubicon'>
               <a href='https://github.com/naginshrestha/Calculator-js'>
               <i class="fa-brands fa-github"></i>
               </a>
             
             </div>

           </div>
         </div>
       </div>


     </div>
     </section>
       
</Carousel>;

   </>
  )
}

export default Projects