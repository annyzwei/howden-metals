import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {FaFax} from 'react-icons/fa'
//import { ToastContainer, toast } from 'react-toastify';


function Popup(props) {
  return (props.trigger) ? (
    <div className = "popup">
      <div className = "popup-inner">
        testing pls
      </div>
    </div>
  ): "";
}

export const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
    
  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID'
  //                     form.current, 'YOUR_USER_ID')
  // }
  return (
    <section id = 'contact'>
      <h2>Contact Us</h2>
      <div className = "container contact__container">
        <div className = "contact__options">
          <article className = "contact__option" onClick={() => {}}>
            <MdEmail />
            <h4>Email</h4>
            <h5>howdenmetals.co@gmail.com</h5>
          </article>

          <article className = "contact__option">
            <AiFillPhone />
            <h4>Phone</h4>
             <h5>647 833 2055</h5>
          </article>

          <article className = "contact__option">
            <FaFax />
            <h4>Fax</h4>
            <h5>416 498 4251</h5>
          </article>
        </div>
        
        <form action ="">

        </form>
      
      </div>
    </section>
  )
}

export default Contact 