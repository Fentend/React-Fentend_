import { useState } from "react";
import Fentend from "../Assets/Fentend.jpeg";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleDropdownClick = () => {
    setIsNavExpanded(false);
  }

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
              <a href="" onClick={handleDropdownClick} >Services</a>
            </li>
          </Link >
          <Link to="../Contact">
            <li className="transition-all ease-linear duration-500">
              <a href="" onClick={handleDropdownClick} >Contact</a>
            </li>
          </Link>
          <Link to="../About">
            <li className="transition-all ease-linear duration-500">
              <a href="" onClick={handleDropdownClick} >About</a>
            </li>
          </Link>
          <Link to="../Contact"> <button onClick={handleDropdownClick} className="bg-indigo-500 text-white py-4 md:py-2 md:px-5 hover:bg-white hover:text-indigo-500 hover:underline w-full">
            Get in Touch
          </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
