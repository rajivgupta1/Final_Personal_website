import React from 'react'
import './Info.css'

const Info = () => {
  return (
   <>
        <section className="flex section2" >

        <div className="flex info-container" id='graduate'>

          <div className="flex info-lists">
            <div className="icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div >
              <h5>Bacholer of IT</h5>
              <p>Graduate</p>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="flex info-lists flex " id='project'>
            <div className="icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <h5>20+ Projects</h5>
              <p>Completed</p>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="flex info-lists flex" id='exprience'>
            <div className="icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <h5>2 Yr Coding</h5>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Info