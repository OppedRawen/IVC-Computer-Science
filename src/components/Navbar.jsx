import React from "react";
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';  // Hamburger icon
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);  // Close menu when link is clicked
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return(

  <nav className="py-10 mb-12 flex justify-between text-[#cacaca] ">
      {/* <h1 className="text-lg font-burtons font-semibold">Portfolio</h1> */}
      <Link to="/" className="text-lg font-burtons font-semibold">
      <HiOutlineDesktopComputer className="text-3xl font-bold w-10 h-10"/>
      </Link>
      
      <div className="md:hidden">
        <GiHamburgerMenu onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer"/>
      </div>
      <div className={`flex justify-end text-sm ${menuOpen ? '' : 'hidden md:flex'}`}>
        {/* ...rest of the code remains the same... */}
        <div className="flex justify-end text-sm">
        <ul className="flex items-center">
          <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
            <motion.a
              href="#about"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, "about")}
            >
              About Us
            </motion.a>
          </li>
          <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
            <motion.a
              href="#experience"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, "experience")}
            >
              Activities
            </motion.a>
          </li>
          <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
            <motion.a
              href="#projects"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, "projects")}
            >
              Projects
            </motion.a>
          </li>
          <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Contact
            </motion.a>
          </li>
          <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
            <motion.a
              
              whileTap={{ scale: 0.95 }}
           
            >
              <Link to="/resources" onClick={()=>setMenuOpen(false)}>Resources</Link>
            </motion.a>
          </li>
        
        </ul>
      </div>
      </div>
     
    </nav>
    );
};

export default Navbar;