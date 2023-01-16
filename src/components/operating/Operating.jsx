import React from 'react'
import './operating.css'
import {useState} from 'react';

const data = [
  {day: "Sunday", opening: "CLOSED", closing: "CLOSED"},
    
    {day: "Monday", opening: "9:00AM", closing: "5:30PM"},
    
    {day: "Tuesday", opening: "9:00AM", closing: "5:30PM"},
    
    {day: "Wednesday", opening: "9:00AM", closing: "5:30PM"},
    
    {day: "Thursday", opening: "9:00AM", closing: "5:30PM"},
    
    {day: "Friday", opening: "9:00AM", closing: "5:30PM"},
    
    {day: "Saturday", opening: "9:00AM", closing: "4:30PM"},
]
export const Operating = () => {
  return (

    <section id = 'operating'>
      <h2>Operating Hours</h2>
      <div id = "help" className = "container operating__container">
      
      <table className = "centered">
        <thead>
          <tr>
            <th>Day</th>
            <th>Opening Hours</th>
            <th>Closing Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) =>{
            return(
              <>
              <tr>
                <td>{data.day}</td>
                <td>{data.opening}</td>
                <td>{data.closing}</td>
              </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <br />
      
      <div className = "centered-text">
        Please schedule vists outside of our regular operating hours via our mobile number: (647) 833 2055
        
      </div>
      
      </div>
      
      

      
    </section>
  )
}

export default Operating