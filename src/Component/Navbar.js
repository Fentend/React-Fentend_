// import React, { useEffect, useState } from 'react';
// import Fentend from "../Assets/Fentend.jpeg"
// import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
// import { Link } from 'react-router-dom';
// import About from './About';
// import Contact from './Contact';

// export const Navbar = () => {
//     let [isOpen, setisOpen] = useState(false);
//   return (
//     <navbar className="md:flex items-center justify-between w-full shadow-md fixed z-20 top-0 left-0 bg-white text-indigo-500">
//        <Link to="../Home"> <div className="flex cursor-pointer items-center">
//             {/*IMAGE IS HERE */}
//             <img src={Fentend} alt="" className="w-10 h-10" />
//             <span className="font-bold">Fentend</span>
//         </div>
//         </Link>

//         <div onClick={() => setisOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-6 md:hidden cursor-pointer'>
//         { isOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
//         </div>

//         <ul className={`md:flex gap-5 m-3 cursor-pointer font-semibold text-sm text-left mt-10 md:mt-2 transition-all duration-500 ease-in-out ${isOpen ? `top-12` : `top-[-490px]`}`} >
//             {/* <Link to="./About"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>ABOUT</li></Link> */}
//             <Link to="../Service"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>Service</li></Link>
//             <Link to="../Contact"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>Contact</li></Link>
//             <Link to="../About"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>About</li></Link>
//             {/* <li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>ABOUT</li> */}
//             <Link to="../Contact"><button className='btn bg-indigo-500 text-white p-2 hover:underline'>Get In Touch</button></Link>
//         </ul>
//     </navbar>
//   )
// }
// export default Navbar;

// import React, { useState } from 'react';
// import Fentend from "../Assets/Fentend.jpeg"
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="md:flex items-center justify-between w-full shadow-md fixed z-20 top-0 left-0 bg-white text-indigo-500">
//       <Link to="../Home">
//         <div className="flex cursor-pointer items-center">
//           {/* IMAGE IS HERE */}
//           <img src={Fentend} alt="" className="w-10 h-10" />
//           <span className="font-bold">Fentend</span>
//         </div>
//       </Link>

//       <div onClick={() => {setIsOpen(!isOpen)}} className='w-7 h-7 absolute right-8 top-6 md:hidden cursor-pointer'>
//          <AiOutlineMenu />
//       </div>

//           <div className={
//             isOpen ? <AiOutlineMenu /> : <AiOutlineClose />
//           }>
//       <ul className={`md:flex gap-5 m-3 cursor-pointer font-semibold text-sm text-left mt-10 md:mt-2 transition-all duration-500 ease-in-out ${isOpen ? `top-12` : `top-[-490px]`}`} >
//         <Link to="../Service"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>Service</li></Link>
//          <Link to="../Contact"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>Contact</li></Link>
//          <Link to="../About"><li className='hover:rounded-md hover:text-white hover:bg-indigo-500 p-1 transition-all ease-linear duration-500'>About</li></Link>
//         <Link to="../Contact"><button className='btn bg-indigo-500 text-white p-2 hover:underline'>Get In Touch</button></Link>
//        </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;

import { useState } from "react";
import Fentend from "../Assets/Fentend.jpeg";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src={Fentend} alt="" className="w-12 h-12" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* Icons from heroicons.com */}
        <svg
          xmins="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z "
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="Recoleta">
          <Link to="../Service">
            <li className="transition-all ease-linear duration-500">
              <a href="">Services</a>
            </li>
          </Link >
          <Link to="../Contact">
            <li className="transition-all ease-linear duration-500">
              <a href="">Contact</a>
            </li>
          </Link>
          <Link to="../About">
            <li className="transition-all ease-linear duration-500">
              <a href="">About</a>
            </li>
          </Link>
          <Link to="../Contact"> <button className="bg-indigo-500 text-white py-4 md:py-2 md:px-5 hover:bg-white hover:text-indigo-500 hover:underline w-full">
            Get in Touch
          </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
