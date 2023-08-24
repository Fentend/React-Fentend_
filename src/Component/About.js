import React, { useEffect } from 'react'
import {AiFillCheckCircle} from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

const About = () => {
    useEffect(()=>{
      Aos.init({duration:1000});
    }, [])
  return (
    <div className='mt-20'>
      <div className='text-center bg-indigo-500 p-32'>
        <p className='text-white text-3xl font-bold'>About Us</p>
      </div>
      <div className='text-center md:w-full'>
        <p className='md:text-left text-left md:pt-16 pt-10 md:pb-5 md:px-64 m-2'>
        Welcome to Fentend Web Solutions, where innovation meets security! We are a cutting-edge tech company dedicated to providing comprehensive website development services while ensuring the utmost protection of your valuable data.
         Our mission is to empower businesses with robust online platforms, driving growth and success, while safeguarding their digital assets from ever-evolving cyber threats.
         At Fentend, we understand that building a website is not just about aesthetics; it's about creating a digital ecosystem that fosters engagement, drives conversions, and enhances brand presence. Simultaneously,
          we recognize the critical need to shield this digital infrastructure from malicious actors seeking to exploit vulnerabilities. With our holistic approach to web development and data protection, you can rest assured that your online presence is in safe hands.
        </p>
        <p className='md:text-left md:pb-16 md:px-64 text-left py-5 m-2'>
        Fentend Web Solutions is your go-to partner for seamless website development and uncompromising data protection. Our team of skilled designers, developers, and cybersecurity experts collaborates to build visually captivating, 
        user-friendly websites that align with your business objectives. We leverage the latest technologies, responsive designs, and intuitive user interfaces to create an unforgettable online experience for your customers.
        While we prioritize aesthetics and functionality, security is at the core of everything we do. We understand the value of your data and the potential risks it faces in today's digital landscape.
         Our state-of-the-art security measures ensure that your website is fortified against cyber threats, including malware, hacking attempts, and data breaches. We implement robust encryption, continuous monitoring, 
         and proactive measures to identify and address vulnerabilities before they become issues.
         With Fentend, you don't need to compromise between a stunning website and data protection. Our holistic approach ensures that your website not only looks great but is also a fortress against cyber threats. Partner with us to elevate your online presence while keeping your data safe, enabling you to focus on what you do best – growing your business with confidence.
        </p>
        </div>
        <div className='flex md:flex-row flex-col bg-gray-100 gap-16 md:p-28 md:mt-0 mt-10'>
          <div className='md:mt-0 mt-20 mx-3'>
            <h1 className='text-center text-2xl font-semibold'>Our Vision</h1><hr className='bg-indigo-500 h-1 md:mb-5 md:mx-44 mb-5 mx-32' data-aos="slide-right"/>
            <p>
            At Fentend Web Solutions, our vision is to be the industry leader in web development and data protection,
             driving digital innovation while setting the gold standard for safeguarding our clients' valuable information in an ever-evolving online landscape.
            </p>
          </div>
          <div className='mx-3'>
            <h1 className='text-center text-2xl font-semibold'>Our Mission</h1><hr className='bg-indigo-500 h-1 md:mb-5 md:mx-72 mb-5 mx-32' data-aos="slide-right"/>
            <p>
            Our mission is to empower businesses of all sizes with dynamic, secure, and innovative websites that amplify their online presence. 
            We are committed to providing cutting-edge technology, unparalleled design, and robust cybersecurity measures, ensuring our clients' 
            websites are not only visually stunning but also impenetrable fortresses against cyber threats.
            </p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:p-28 px-2 md:mt-0 mt-20'>
        <div>
        <h1 className='text-left text-3xl font-semibold'>Goals</h1><hr className='bg-indigo-500 h-1 w-14 mx-2' data-aos="slide-right"/>
          <ul>
            <li className='my-2'><AiFillCheckCircle className='text-indigo-500 mb-2'/><span className='font-semibold'>Excellence in Web Development:</span> Strive to consistently deliver exceptional websites that exceed client expectations, reflecting our commitment to quality, innovation, and user experience.</li>
            <li className='my-2'><AiFillCheckCircle className='text-indigo-500 mb-2'/><span className='font-semibold'>Data Security Leadership:</span> Be at the forefront of data protection, continuously enhancing our security protocols, staying ahead of emerging threats, and setting industry benchmarks for data integrity.</li>
            <li className='my-2'><AiFillCheckCircle className='text-indigo-500 mb-2'/><span className='font-semibold'>Client-Centric Approach: </span>Foster strong client relationships by actively listening, understanding unique needs, and providing personalized solutions that drive business growth and customer satisfaction.</li>
            <li className='my-2'><AiFillCheckCircle className='text-indigo-500 mb-2'/><span className='font-semibold'>Innovation and Technology:</span> Embrace emerging technologies, stay current with industry trends, and continuously improve our skills to bring the latest advancements to our clients, making them stand out in the digital world.</li>
            <li className='my-2'><AiFillCheckCircle className='text-indigo-500 mb-2'/><span className='font-semibold'>Education and Advocacy:</span> Empower clients with knowledge about online security best practices and industry insights, advocating for a safer digital environment and ensuring our clients are well-informed partners in their online journey.</li>
          </ul>
        </div>
        </div>
        <Footer/>
      </div>
  )
}
export default About;