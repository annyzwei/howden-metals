import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Details from './components/details/Details'
import Operating from './components/operating/Operating'
import Contact from './components/contact/Contact'
import Popup from './components/contact/Popup'
import {Modal, Alert} from 'react-bootstrap'

import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {FaFax} from 'react-icons/fa'


import emailjs from 'emailjs-com'
import {useRef} from 'react'
import {useState, useEffect, useContext} from 'react'
import {useFade} from 'react'
//import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  
  const [show, setShow] = useState(false);
 
  const handleShow = () => setShow(false);
  const handleClose = () => setShow(false);
  //const handleShowAlert = () =>setShowAlert(true);

  const handleShowAlert = () =>{
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000)
    

  }
  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    }
  }, [])


  //form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_b9ehaio', 'template_w0zti8k', 
    form.current, 'AyzFcFsy_iiQ2JhWl')
  }
  return (
    <>
    <Navbar />
    <About />
    <Details />
    <Operating />
    <Alert show = {showAlert} variant = "success">
      <div className = "popup">
        <h3>Copied to Clipboard!</h3>
      </div>
    </Alert>

    <section id = 'contact'>
      <h2>Contact Us</h2>
      <div className = "contact__container">
        <div className = "contact__options">
          <button className = "contact__option" 
          onClick={() => {
            handleShowAlert();  navigator.clipboard.writeText("howdenmetals.inc@gmail.com");}}>
            <MdEmail className = "icon_contact"/>
            <h2>Email</h2>
            <h3>howdenmetals.inc@gmail.com</h3>
          </button>

          <button className = "contact__option"
          onClick={() => {
            handleShowAlert();  navigator.clipboard.writeText("647 833 2055");}}>
            <AiFillPhone className = "icon_contact"/>
            <h2>Phone</h2>
             <h3>647 833 2055</h3>
          </button>

          <button className = "contact__option"
          onClick={() => {
            handleShowAlert();  navigator.clipboard.writeText("416 498 4251");}}>
            <FaFax className = "icon_contact"/>
            <h2>Fax</h2>
            <h3>416 498 4251</h3>
          </button>
        </div>
        
        <form ref = {form} onSubmit = {sendEmail}>
            <input type = "text" name = 'name' placeholder = 'Your Full Name' required />
            <input type = "email" name = 'email' placeholder = 'Your Email' required />
            <textarea name = "message" rows = '7' placeholder = 'Your Message' required></textarea>
            <button type = 'submit' className = 'btn btn-primary'>Send Message</button>
        </form>
      
      </div>
    </section>
    {/* <Popup trigger = {timedPopup}>
      <h3>Mypopup</h3>
      <p>testing something plsssss</p>
    </Popup> */}
  </>
  )
}

export default App;
