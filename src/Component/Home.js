import React, { useEffect } from 'react'
import { Fentend, Main, CEO, COE, Business, Service } from '../Assets';
import {FaLaptop, FaMobileAlt, FaInternetExplorer} from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  }, [])
  return (
    <div className='text-center md:mt-12 md:pt-24 mt-5 pt-5'>

      {/* YOUR BUSINESS SECTION */}
      <div className='flex md:flex-row flex-col p-10'>
        <div className='md:w-1/2' data-aos="fade-right">
        <h1 className="text-indigo-500 md:text-4xl text-2xl md:font-semibold md:my-5">Take your business to the next level</h1>
          <p className='md:text-xl text-sm my-5 mx-3 text-left'>we provide innovative IT solutions to clients from various industries including banking, finance, insurance etc.
             We strive to deliver cost-effective and adaptive technology solutions that enable our clients to meet their business objectives and goals,
              and gain a greater return on their investment.</p>
        </div>
        <div className='md:w-1/2 md:mx-5' data-aos="fade-left">
        <img src={Main} alt='' className="w-full h-full "/>
        </div>

      </div>
   {/* YOUR PROMOTION SECTION */}
      <div className='flex md:flex-row flex-col md:p-10 md:my-20 mt-10 ' data-aos="fade-up">
      <div className='md:w-1/2 md:mx-5 mx-9'>
        <img src={Service} alt='' className="md:w-full md:h-full "/>
        </div>
        <div className='md:w-1/2'>
        <h1 className="text-indigo-500 md:text-3xl text-2xl font-semibold my-5">We help you to promote your business</h1>
          <p className='md:text-xl text-left text-sm my-5 md:mx-3'>Managing your business IT department and staying up to date with the latest technologies can be a hassle. 
          Outsource your technology to us and we’ll take care of your infrastructure, so you can say goodbye to prohibitively expensive IT and downtime for good.</p>
        </div>
      </div>
         {/* WHAT WE DO SECTION */}
         <h1 className="text-3xl text-indigo-500 my-5 py-4 mt-10" data-aos="slide-right">What we do</h1>
         <div className=' group flex md:flex-row flex-col gap-10 w-full py-10'>
          <div className='group-hover:blur-sm hover:!blur-none shadow-md shadow-gray-500 mx-3 text-sm' data-aos="flip-left">
            <FaLaptop className="mx-52 my-5 text-3xl"/>
            <h2 className="md:text-3xl text-2xl text-indigo-500 my-2 py-2 underline">Web Development</h2>
            <p className="pb-5 text-left md:text-lg mx-2">We develop web app and desktop app for companies and Individuals across the globe to manage their businesses Fentend market tech strive to breathe life into your ideas
               by developing software solutions that can bring value to your business. Whether it's an interactive mobile app, desktop app, web application or a customized software solution,
                we got you covered.</p>
          </div>
          <div className=" group-hover:blur-sm hover:!blur-none shadow-md mx-3 shadow-gray-500 cursor-pointer" data-aos="flip-up">
            <FaMobileAlt className="mx-52 my-5 text-3xl"/>
            <h2 className="md:text-3xl text-2xl my-2 py-2 underline text-indigo-500">App Development</h2>
            <p className='text-left text-sm md:text-lg mx-2'>We develop Mobile Application for company to manage and run their business across the globe. 
              Mobile App that can run on different platform such as Android,IOS, etc</p>
          </div>
          <div className='group-hover:blur-sm hover:!blur-none shadow-md mx-3 shadow-gray-500' data-aos="flip-left">
            <FaInternetExplorer className="text-3xl mx-36 my-5"/>
            <h2 className="md:text-3xl text-2xl my-2 py-2 text-indigo-500 underline">Social Media Management</h2>
            <p className='text-left text-sm md:text-lg mx-2'>
            We analyze social media audiences and develope a strategy that tailored to them, creating and distributing content for social media profiles, 
            monitoring online conversations, collaborating with influencers, providing and monitoring, measuring, and reporting on social media performance
            </p>
          </div>
         </div>

         {/* OUR SERVICE SECTION */}
      <div className='flex md:flex-row flex-col p-10 pt-32' data-aos="zoom-out-up">
      <div className='md:w-1/2 md:mx-5'>
        <img src={Business} alt='' className="w-full h-full "/>
        </div>
        <div className='md:w-1/2'>
        <h2 className="md:text-3xl text-2xl text-indigo-500 font-semibold mt-5">Our Services</h2>
          <p className='md:text-xl text-sm text-left my-5 mx-3'>Our highly skilled development teams specialized in Java, PHP, React, 
          Angular and AWS help you accelarate your business via modern custom software solutions.</p>
        </div>
      </div>

      {/* OUR TEAM SECTION */}
      <div className="bg-gray-100 mb-10">
      <h2 className="text-4xl text-indigo-500 my-3 py-2 underline" data-aos="slide-right">Our team</h2>
      <div className=' flex md:flex-row flex-col gap-5 md:mx-10 mx-5 my-5'>
        <div className='md:w-1/2'>
          <img src={COE} alt="" className='md:w-64 h-64 md:text-center md:mx-56 rounded-lg my-3'/>
        <h3 className='font-semibold text-xl my-2'>Flamingos</h3>
        <button className='bg-indigo-500 text-white rounded-md p-2 mb-5 w-28 cursor-pointer font-serif' data-aos="slide-right">Read More</button>
        </div>
        <div className='md:w-1/2'>
          <img src={CEO} alt="" className='md:w-62 md:h-64 text-center md:mx-56 mx-20 rounded-lg my-3'/>
        <h3 className='font-semibold text-xl my-2'>Obafemi</h3>
        <button className='bg-indigo-500 text-white rounded-md p-2 mb-5 ml-10 w-28 cursor-pointer font-serif' data-aos="slide-right">Read More</button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Home;