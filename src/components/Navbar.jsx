

import React from "react";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(window.innerWidth > 768 ? 'auto' : '100vh');

    const toggleMenu = () => {
      if (!menuOpen && window.innerWidth <= 768) { 
          setMenuHeight(`${document.body.scrollHeight}px`);
          document.body.style.overflow = 'hidden';
      } else if (window.innerWidth <= 768) {
          setMenuHeight('100vh');
      } else {
          setMenuHeight('auto');
      }
      setMenuOpen(prev => !prev);
  };


    return (
        <nav className="py-10 mb-12 flex justify-between text-[#cacaca]  z-20">
            <Link to="/" className="text-lg font-burtons font-semibold">
                <HiOutlineDesktopComputer className="text-3xl font-bold w-10 h-10" />
            </Link>

            <div className="md:hidden">
                <GiHamburgerMenu onClick={toggleMenu} className="cursor-pointer" />
            </div>
            
            <div className={` absolute top-0 right-0 w-64 bg-[#1d1d25] transform ${menuOpen ? 'translate-x-0 pt-10'  : 'translate-x-full'} transition-transform duration-300 ease-in-out md:static md:transform-none z-50 `}  style={{minHeight:menuHeight}}>
               {/* Close Button */}
               <button 
                    className="md:hidden absolute top-2 right-2"
                    onClick={() => setMenuOpen(false)}
                >
                    X
                </button>
                <ul className="flex flex-col items-start md:flex-row md:items-center md:justify-end text-sm space-y-4 md:space-y-0">
                <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Link to="/resources" onClick={() => setMenuOpen(false)}>
                                Resources
                            </Link>
                        </motion.div>
                    </li>
                    <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
                        <motion.a
                            href="#activities"
                            whileTap={{ scale: 0.95 }}
                          
                        >
                            <Link to="/activities" onClick={() => setMenuOpen(false)}>Activities</Link>
                        </motion.a>
                    </li>
                   
                    <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
                        <motion.a
                            href="#contact"
                            whileTap={{ scale: 0.95 }}
                          
                        >
                           <Link to="/contact" onClick={() => setMenuOpen(false)}> Contact</Link>
                        </motion.a>
                    </li>
                    <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
                        <motion.a
                            href="#projects"
                            whileTap={{ scale: 0.95 }}
                      
                        >
                          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                        </motion.a>
                    </li>
                   
                </ul>
                <div className=" mt-10 md:hidden ">  {/* Push the social links to the bottom */}
                <SocialLinks layout="horizontal"/>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;