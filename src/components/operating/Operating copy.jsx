import React from 'react'
import './operating.css'
import {useState} from 'react';


const hours = [
  
  {day: "Sunday", opening: "CLOSED", closing: "CLOSED"},
    
    {day: "Monday", opening: "9:00", closing: "6:00"},
    
    {day: "Tuesday", opening: "9:00", closing: "6:00"},
    
    {day: "Wednesday", opening: "9:00", closing: "6:00"},
    
    {day: "Thursday", opening: "9:00", closing: "6:00"},
    
    {day: "Friday", opening: "9:00", closing: "6:00"},
    
    {day: "Saturday", opening: "10:00", closing: "4:00"},
]
export const Operating = () => {
  const [rows,setRows] = useState(hours)
  
  const Row = (props) => {
    const {day, opening, closing} = props
    return(
    <tr>
      <td>{day}</td>
      <td>{opening}</td>
      <td>{closing}</td>
    </tr>)
  }

  const Table = (props) => {
    const {data} = props
    console.log(data)
    return (<table>
      <tbody>
        {data.map((row, index) => {
          <Row day = {row.day}
                opening = {row.opening}
                closing = {row.closing}/>
        })}
      </tbody>
    </table>)
  }
  return (

    <section id = 'operating'>
     
      <div>
      <h2>Operating Hours</h2>
      <Table data = {rows} />
      
      </div>

      
    </section>
  )
}

export default Operating