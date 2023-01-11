import React from 'react'
import './about.css'
import CTA from './CTA'
import COMPANY from '../../assets/temp.png'


export const About = () => {
  return (
    <div className='about' id = 'home'>
      <div className = "container about__container">
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