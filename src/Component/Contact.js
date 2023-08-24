import React, {useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import Contact3 from "../Assets/Contact3.jpeg";
import {MdLocationOn, MdEmail} from "react-icons/md";
import {BsTelephoneForwardFill} from "react-icons/bs";
import "./Contact.css";
import Footer from './Footer';
import Popup from './Popup';



const Contact = () => {
  const [isRotating, setIsRotating] = useState(false);



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tbi85d1', 'template_4odkm1d', form.current, '2s34MQOghdH2W2flF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

const [ShowPopup, setShowPopup] = useState (false);
const handleOnClose = () => setShowPopup (false)



  return (
    <div className='mt-20'>

      <div className='bg-gray-200 md:flex md:flex-row md:mx-10'>
        <img src={Contact3} alt='' className='md:h-72 md:w-1/2 hidden md:block'/>
        <p className='text-indigo-500 text-4xl font-semibold md:pt-32 p-20 md:p-0 md:mx-60'>Contact Us</p>
      </div>
      <hr className='h-1 bg-indigo-500 md:mt-20 mt-10 md:mx-10 mx-5'/>
      <div className='flex md:flex-row flex-col md:gap-24 gap-12 text-center mt-20 shadow-md md:p-20 p-10 md:mb-0 mb-28'>
        <di className='text-center text-2xl pb-2'><MdLocationOn icon={MdLocationOn} className={`text-center text-indigo-500 text-2xl md:mx-44 mx-32 my-2 ${isRotating ? 'animate-rotate' : ''}`}  onClick={() => setIsRotating(!isRotating)}/>
        <p className='text-lg font-serif md:mx-5'>2 Old Yaba Road, Adekunle Bus-stop, Yaba Lagos</p>
        </di>
        <div className='text-center text-2xl pb-2'><MdEmail className='text-center text-indigo-500 text-2xl md:mx-40 mx-32 my-2'/><p className='text-lg font-serif md:mx-10'>Email: Fentendmarkettech@gmail.com</p>
        </div>
        <div className='text-center text-2xl pb-2'><BsTelephoneForwardFill className='text-center text-indigo-500 text-2xl md:mx-24 mx-32 my-2'/><p className='text-lg font-serif mx-2'>Phone: (+234)07051292198</p>
        </div>
      </div>
      <div className='bg-gray-200 md:p-24 md:pt-10 md:pb-80 pb-80 pt-10 md:mb-48 mb-44'>
        <h1 className='text-center font-serif text-3xl py-5'>Send Us A Message</h1>
        <div className='flex md:flex-row flex-col gap-10'>
          <p className='md:text-2xl text-xl font-serif p-5'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
          <form ref={form} onSubmit={sendEmail} className='h-80 flex flex-col gap-4 p-3'>
            <labe className="text-xl ffont-serif">Your Name<span className='textlg text-red-600'>*</span></labe>
            <input type='text' name="user_name" required="please input your name" className='py-3 pr-52'></input>
            <labe className="text-xl font-serif">Your Email<span className='textlg text-red-600'>*</span></labe>
            <input type='email' name="user_email" required="please input your Email" className='py-3 pr-52'></input>
            <labe className="text-xl font-serif">Your Phone<span className='textlg text-red-600'>*</span></labe>
            <input type='phone' name="user_phone" required="please input your Phone number" className='py-3 pr-52'></input>
            <labe className="text-xl font-serif">Message<span className='textlg text-red-600'>*</span></labe>
            <input type='text' name="message"  required="please we need your message" placeholder='Your Message' className='pb-28 pr-52'></input>
            <button type="submit" value="Send" className='bg-indigo-500 text-lg rounded-md text-white p-3 font-serif' onClick={() => setShowPopup (true)}>Send Message</button>
            
          </form>
        </div>
        </div>

        <Popup onClose={handleOnClose} PopupVisible={ShowPopup}/>
       
        <Footer/>
      
    </div>
  )
}
export default Contact;