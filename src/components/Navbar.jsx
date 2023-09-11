import React from "react";
import {motion} from 'framer-motion';
import {HiOutlineDesktopComputer} from 'react-icons/hi';

const Navbar = () => {

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return(

  <nav className="py-10 mb-12 flex justify-between text-[#cacaca]">
      {/* <h1 className="text-lg font-burtons font-semibold">Portfolio</h1> */}
      <HiOutlineDesktopComputer className="text-3xl font-bold w-10 h-10"/>
      
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
          <li>
          <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
              href="https://drive.google.com/file/d/1rhmXrkVmYROLt2MUlb-ERt6tfg3YzdH6/view?usp=sharing"
              target="_blank" // Add target="_blank" to open the link in a new tab
              rel="noopener noreferrer" // Add rel="noopener noreferrer" for security reasons
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
    );
};

export default Navbar;