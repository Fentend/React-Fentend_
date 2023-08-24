import React, { useEffect, useState } from 'react';
import Fentend from "../Assets/Fentend.jpeg"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

export const Navbar = () => {
    let [isOpen, setisOpen] = useState(false);
  return (
    <navbar className="md:flex items-center justify-between w-full shadow-md fixed top-0 left-0 bg-white text-indigo-500">
       <Link to="../Home"> <div className="flex cursor-pointer items-center">
            {/*IMAGE IS HERE */}
            <img src={Fentend} alt="" className="w-10 h-10" />
            <span className="font-bold">Fentend</span>
        </div>
        </Link>

        <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 md:hidden cursor-pointer'>
        { isOpen ? <AiOutlineClose/> : <AiOutlineMenu/>} 
        </div>
       
        <ul className={`md:flex gap-5 m-3 cursor-pointer font-semibold text-sm text-left mt-10 md:mt-2 transition-all duration-500 ease-in-out ${isOpen ? `top-12` : `top-[-490px]`}`} >
            {/* <Link to="./About"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>ABOUT</li></Link> */}
            <Link to="../Service"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>Service</li></Link>
            <Link to="../Contact"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>Contact</li></Link>
            <Link to="../About"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>About</li></Link>
            {/* <li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>ABOUT</li> */}
            <Link to="../Contact"><button className='btn bg-indigo-500 text-white p-2 hover:underline'>Get In Touch</button></Link>
        </ul>
    </navbar>
  )
}
export default Navbar;