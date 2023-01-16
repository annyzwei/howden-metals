import React from 'react'
import './about.css'
import CTA from './CTA'


export const About = () => {
  return (
    <div className='home' id = 'home'>
      <div className = "container home__container">
        <h1>Howden Metals</h1>
        <h5 className="text-light">Scarborough, ON</h5>
        
        <CTA />
        {/* <div className = "company">
          <img src = {COMPANY} alt = "Howden Metals Company"/>
        </div> */}
      </div>
    </div>
  )
}
export default About