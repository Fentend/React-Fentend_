import React from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkedinUrl =
    "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile";
  const instagramUrl = "https://www.instagram.com/fentend_/";
  const twitterUrl = "https://twitter.com/Fentend_";
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
  return (
    <div className="bg-indigo-500 md:h-full md:w-full">
      <h1 className="md:text-2xl text-white font-bold md:my-10 text-2xl pt-12 md:text-center text-center">
        Connect with Us
      </h1>
      <div className="py-10 md:py-0">

        <div className="md:flex md:items-center md:justify-evenly">
        <div className="flex flex-col items-center justify-center">
          <MdLocationOn className=" md:my-3 mx-40 text-3xl my-1 text-indigo-800 md:text-4xl" />
          <p className="font-title font-semibold text-white text-md text-center">
            2 old yaba road, Adekunle bus-stop, Yaba, Lagos state
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 md:mt-0">
          <MdEmail className=" md:my-3 text-indigo-800 md:text-4xl mx-40 text-3xl my-1" />
          <p className="font-title font-semibold text-white text-sm text-center">
            <p className="text-md">info@fentend.com</p>
            <p className="text-md">Team@fentend.com</p>
            <p className="text-md">Fentendmarkettech@gmail.com</p>
          </p>
        </div>
        </div>

        {/* ICONS */}

        <div className="flex items-center justify-center gap-5 md:gap-4 py-10 mt-5 md:mt-0">
            <div className="flex items-center justify-center gap-2 md:gap-1">
          <FaInstagram className="text-2xl my-1 text-indigo-800 md:text-4xl md:my-2" />
          <p
            onClick={instagram}
            className="cursor-pointer text-md font-title text-white font-semibold md:text-center text-center"
          >
            Fentend_
          </p>
            </div>

            <div className="flex items-center justify-center gap-2 md:gap-1">
          <FaTwitterSquare className=" text-2xl my-1 text-indigo-800 md:text-4xl md:my-2" />
          <p
            onClick={twitter}
            className="cursor-pointer text-md  font-title text-white font-semibold md:text-center text-center"
          >
            Fentend_
          </p>
            </div>
            
            <div className="flex items-center justify-center gap-2 md:gap-1">
          <FaLinkedin className="text-2xl my-1 text-indigo-800 md:text-4xl md:my-2" />
          <span
            onClick={linkedinLink}
            className="font-semibold text-md font-title text-white cursor-pointer md:text-center text-center"
          >
            Linkedin
          </span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
