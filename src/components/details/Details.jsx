import React from 'react'
import './details.css'
const Details = () => {
  return (
    <section id = 'about'>
      <h2>About Us</h2>
      <div className ="container about__container">
        <h3>Howden Metals Inc.</h3>
        <p>
          We sell and buy scrap metal from both large and small cooperations. 
          Prices for specific materials are weighed and bought at market price.
          Contact or visit us today to get connected! 
        </p>
        <br/>
        <h3>Our Company</h3>
        <p>Opening over 7 years ago, we are a family-run business situated in Scarborough, Ontario.
        </p>
      </div>
    </section>
  )
}

export default Details