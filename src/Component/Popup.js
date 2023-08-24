import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {LuCheckCircle} from "react-icons/lu";
import {IoMdClose} from "react-icons/io";
// import ClipLoader from "react-spinners/ClipLoader";

const Popup = ({PopupVisible, onClose}) => {

    if (!PopupVisible) return null; 
    
  return (
    
    <div className='md:py-56 pt-24 fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm'>
  
         <div className='bg-white text-center border-2 border-indigo-500 border-solid md:mx-96 mx-5'>
         <div className='flex flex-row bg-indigo-500 text-2xl text-white mx-26 py-5 gap-20 md:gap-0'>
          <h1 className='md:mx-64 mx-16'>Thank You</h1>
          <div onClick={onClose}><IoMdClose className='md:text-3xl text-x2l border'/></div>
          </div>
          <div className='flex flex-col'>
            <LuCheckCircle className='md:mx-80 mx-40 my-5 text-3xl'/>
            <p className='my-5'>
              Your submission has been received, you will recieve a response within 24hrs.
            </p>
            <Link to="./Home"><button className='text-lg font-serif bg-indigo-500 rounded-md text-white py-2 px-2 md:mx-56 my-5'>Back to Main Menu</button></Link>
          </div>

        </div>
    </div>
  )
}
export default Popup;
