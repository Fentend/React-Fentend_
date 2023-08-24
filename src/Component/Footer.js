import React from 'react';
import {MdLocationOn, MdEmail} from "react-icons/md";
import {FaLinkedin, FaInstagram, FaTwitterSquare} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const linkedinUrl = 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile';
    const instagramUrl = 'https://www.instagram.com/fentend_/';
    const twitterUrl = 'https://twitter.com/Fentend_';
    const linkedinLink = () => {
        window.location.href = linkedinUrl;
        // window.location.href = instagramUrl;
      };
    const instagram = () => {
        window.location.href = instagramUrl;
      };
    const twitter = () => {
        window.location.href = twitterUrl;
      };
    return(
        <div className='bg-indigo-500 md:h-full md:w-full mt-20 md:mt-0'>
            <h1 className="md:text-2xl text-white font-bold md:my-10 text-2xl pt-6 md:text-center text-center">Quick Link</h1>
            <div className='flex md:flex-row flex-col gap-10 py-10'>
                <div className='md:w-1/2 md:ml-2'>
                   <MdLocationOn className='md:mx-56 md:my-3 mx-40 text-3xl my-1 text-white md:text-4xl'/>
                    <p className='font-semibold text-sm mx-1 md:mx-0 md:text-center text-center'>2 old yaba road, Adekunle bus-stop, Yaba, Lagos state</p>
                </div>
                <div className='md:w-1/2'>
                    <MdEmail className='md:mx-56 md:my-3 text-white md:text-4xl mx-40 text-3xl my-1'/>
                    <p className='font-bold md:text-center text-center'>Fentendmarkettech@gmail.com</p>
                </div>
                <div className='flex flex-col md:w-1/2 md:mr-10 mt-5 md:mt-0'>
                    <FaInstagram className='mx-44 text-3xl my-1 md:mx-40 text-white md:text-4xl md:my-2'/>
                    <p onClick={instagram} className='cursor-pointer font-semibold md:text-center text-center'>Fentend_</p>
                    <FaTwitterSquare className='mx-44 text-3xl my-1 md:mx-40 text-white md:text-4xl md:my-2'/>
                    <p onClick={twitter} className='cursor-pointer font-semibold md:text-center text-center'>Fentend_</p>
                    <FaLinkedin className='mx-44 text-3xl my-1 md:mx-40 text-white md:text-4xl md:my-2'/>
                    <span onClick={linkedinLink} className='font-semibold cursor-pointer md:text-center text-center'>Linkedin</span>
                </div>

            </div>
        </div>
    )

}
export default Footer;