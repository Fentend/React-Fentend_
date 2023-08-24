import React from 'react'
import Contact3 from "../Assets/Contact3.jpeg";
import Footer from './Footer';
import { Service1 } from '../Assets';
import { Link } from 'react-router-dom';

 const Service = () => {
  return (
    <div className='mt-20'>
    <div className='md:bg-gray-200 bg-gray-100 md:flex md:flex-row md:mx-10 md:mb-0 mb-28'>
      <img src={Service1} alt='' className='md:h-72 md:w-1/2 hidden md:block'/>
      <p className='text-indigo-500 md:text-4xl font-semibold md:pt-32 md:mx-56 md:p-0 p-16 text-center text-2xl'>Our Services</p>
    </div>
    {/* <hr className='h-1 bg-indigo-500 mt-20 mx-10'/> */}
    <div className='bg-gray-200 md:p-24 md:mb-28 md:mt-28  px-5 py-10'>
      <div className='flex flex-col gap-10'>
        <div>
          <h1 className='text-2xl font-serif my-3'>Website Design</h1>
          <p className='mb-3'>
          We design websites with beautiful user interface, engaging to first time or returning customers, highly secure, easy to use CMS, responsive (i.e ability to view the website with ease on all your devices) and very fast to load websites which turn your website visitors into customers.
          </p>
          <Link to="./Contact"><button className='p-2 md:mt-0 mt-3 text-white bg-indigo-500 font-serif hover:bg-gray-100 hover:text-indigo-800 cursor-pointer'>Learn More</button></Link>
          <hr className='h-1 bg-slate-400 mt-20'/>
          <h1 className='text-2xl font-serif my-3'>Ecommerce</h1>
          <p className='mb-3'>
          we design websites with beautiful user interface, engaging to first time or returning customers, highly secure, easy to use CMS, responsive (i.e ability to view the website with ease on all your devices) and very fast to load websites which turn your website visitors into customers.
          </p>
          <Link to="./Contact"><button className='p-2 md:mt-0 mt-3 text-white bg-indigo-500 font-serif hover:bg-gray-100 hover:text-indigo-800 cursor-pointer'>Learn More</button></Link>
          <hr className='h-1 bg-slate-400 mt-20'/>
          <h1 className='text-2xl font-serif my-3'>UI/UX Design</h1>
          <p className='mb-3'>
          UI is how a user interacts with our website while User Experience is how the user feel when using your app or website. We create user-oriented UI/UX for your app or website
          </p>
          <Link to="./Contact"><button className='p-2 md:mt-0 mt-3 text-white bg-indigo-500 font-serif hover:bg-gray-100 hover:text-indigo-800 cursor-pointer'>Learn More</button></Link>
          <hr className='h-1 bg-slate-400 mt-20'/>
          <h1 className='text-2xl font-serif my-3'>Search Engin Optimization (SEO)</h1>
          <p className='mb-3'>
          We will conduct a thorough investigation to find out everything there is to know about your target audience and how we can utilize your website’s content to drive traffic and turn your visitors into paying customers. By listening to you and determining your business needs, we will put together a successful plan that will help you accomplish your goals and change the way you do business online.
          </p>
          <Link to="./Contact"><button className='p-2 md:mt-0 mt-3 text-white bg-indigo-500 font-serif hover:bg-gray-100 hover:text-indigo-800 cursor-pointer'>Learn More</button></Link>
        </div>
      </div>
      </div>
      <Footer/>
  </div>
  )
}
export default Service;