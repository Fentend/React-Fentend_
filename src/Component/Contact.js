import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from "react-toastify";
import Contact3 from "../Assets/Contact3.jpeg";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsTelephoneForwardFill } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import "./Contact.css";
import Footer from "./Footer";
// import Popup from "./Popup";

const Contact = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    // Perform form validation
    if (form.current.checkValidity()) {
      emailjs
        .sendForm(
          "service_tbi85d1",
          "template_4odkm1d",
          form.current,
          "2s34MQOghdH2W2flF"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsOpen(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("form is invalid")
    }
  };

    const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      navigate('/');
    }
  };
  // const [ShowPopup, setShowPopup] = useState(false);
  // const handleOnClose = () => setShowPopup(false);

  return (
    <div className="mt-10">
      <div className="bg-gray-200 md:flex md:flex-row md:mx-10">
        <img
          src={Contact3}
          alt=""
          className="md:h-72 md:w-1/2 hidden md:block"
        />
        <p className="text-indigo-500 text-4xl text-center md:w-1/2 font-semibold p-20 md:p-0 flex items-center justify-center ">
          Contact Us
        </p>
      </div>
      <hr className="h-1 bg-indigo-500 md:mt-20 mt-10 md:mx-10 mx-5" />
      <div className="flex flex-col lg:flex-row gap-6 py-10 text-center shadow-md md:py-20 items-center justify-center md:mb-0">
       
        <div className="flex flex-col items-center justify-center text-2xl pb-2">
          <MdLocationOn
            icon={MdLocationOn}
            className={`text-center text-indigo-500 text-2xl md:mx-44 mx-32 my-2 ${
              isRotating ? "animate-rotate" : ""
            }`}
            onClick={() => setIsRotating(!isRotating)}
          />
          <p className="text-sm md:text-lg md:mx-5">
            2 Old Yaba Road, Adekunle Bus-stop, Yaba Lagos
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center text-2xl pb-2">
          <MdEmail className="text-center text-indigo-500 text-2xl md:mx-40 mx-32 my-2" />
          <p className="text-sm md:text-lg md:mx-10">Email: Fentendmarkettech@gmail.com</p>
        </div>

        <div className="flex flex-col items-center justify-center text-2xl pb-2">
          <BsTelephoneForwardFill className="text-center text-indigo-500 text-2xl md:mx-24 mx-32 my-2" />
          <p className="text-sm md:text-lg mx-2">Phone: [+234] 705 1292 198</p>
        </div>
      </div>

            {/* SEND US A MESSAGE */}
            
      <div className="md:pt-10 mx-4 md:mx-10 pb-20">
        <h1 className="text-center text-2xl py-6 text-indigo-500">Send Us A Message</h1>
        <div className="flex md:flex-row flex-col items-center justify-center gap-4">
          <div className="md:w-1/2">
          <p className="md:text-xl text-base text-center p-2 md:p-5 ">
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days.
          </p>
          </div>

          {/* Form container */}
          <div className=" md:w-1/2 w-full bg-gray-300 rounded-md px-4 md:px-10 py-6">

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 p-3"
          >
            <label className="text-sm md:text-lg">
              FullName<span className="text-lg  text-red-600">*</span>
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="font-title py-4 px-2 outline-none rounded-md"
            ></input>
            <label className="text-sm md:text-lg">
              Email Address<span className="text-lg text-red-600">*</span>
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="font-title py-4 px-2 outline-none rounded-md"
            ></input>
            <label className="text-sm md:text-lg">
              Phone Number<span className="text-lg text-red-600">*</span>
            </label>
            <input
              type="phone"
              name="user_phone"
              required
              className="font-title py-4 px-2 outline-none rounded-md"
            ></input>
            <label className="text-sm md:text-lg">
              Message<span className="text-lg text-red-600">*</span>
            </label>
            <textarea
              type="text"
              name="message"
              cols="30"
              rows="4"
              required
              placeholder="Your Message"
              className="font-title py-2 px-2 rounded-md outline-none"
              ></textarea>
            {/* <button
              type="submit"
              value="Send"
              className="bg-indigo-500 text-lg mt-10 rounded-md text-white p-3"
              onClick={() => setShowPopup(true)}
              >
              Send Message
            </button> */}
            <button
            type="submit"
            // value="send"
            className="bg-indigo-500 text-lg mt-10 capitalize rounded-md text-white p-3"
            // onClick={toggleModal}
            >
              send message
            </button>

          </form>
      </div>
        </div>
      </div>

      {isOpen && (
        <div className='fixed z-10 inset-0 overflow-y-auto' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>
              <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'> &#8203;</span>
                <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                  <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    <div className='sm:flex sm:items-start'>
                      <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                        <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>
                         Thank You!
                        </h3>
                        <div className='mt-2'>
                          <p className='text-sm text-gray-500'>
                          Your submission has been received, you will recieve a response within 24hrs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                      <div className='bg-gay-50 px-4 py-3 sm:px-6sm:flex-row-reverse'> 
                        <button type='button' className='mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm' onClick={toggleModal}>Close</button>
                      </div>
                </div>
          </div>
        </div>
      )}

      {/* <Popup onClose={handleOnClose} PopupVisible={ShowPopup} /> */}

      <Footer />
    </div>
  );
};
export default Contact;
