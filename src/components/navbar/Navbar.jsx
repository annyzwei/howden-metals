import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiTimeFive} from 'react-icons/bi'
import {AiFillMail} from 'react-icons/ai'
import {useState} from 'react'

export const Navbar = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav class = "sticky">
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      {/* default state */}
      <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill/></a>
      <a href="#operating" onClick={() => setActiveNav('#operating')}  className={activeNav === '#operating' ? 'active' : ''}><BiTimeFive/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><AiFillMail/></a>
    </nav>
  )
}

export default Navbar