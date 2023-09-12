

import React from "react";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [sidebarHeight, setSidebarHeight] = useState('100vh');
    const toggleMenu = () => {
      setMenuOpen(prev => !prev);
      if (!menuOpen) { // If about to open
        setSidebarHeight(`${document.body.scrollHeight}px`);
      } else {
        setSidebarHeight('100vh');
      }
    };
    
    const handleLinkClick = (e, sectionId) => {
        e.preventDefault();
        setMenuOpen(false);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="py-10 mb-12 flex justify-between text-[#cacaca]  z-20">
            <Link to="/" className="text-lg font-burtons font-semibold">
                <HiOutlineDesktopComputer className="text-3xl font-bold w-10 h-10" />
            </Link>

            <div className="md:hidden">
                <GiHamburgerMenu onClick={toggleMenu} className="cursor-pointer" />
            </div>
            
            <div className={`absolute top-0 right-0 h-full w-64 bg-[#1d1d25] transform ${menuOpen ? 'translate-x-0 pt-10'  : 'translate-x-full'} transition-transform duration-300 ease-in-out md:static md:transform-none z-50 `}  style={{ minHeight: `${document.body.scrollHeight}px` }}>
               {/* Close Button */}
               <button 
                    className="md:hidden absolute top-2 right-2"
                    onClick={() => setMenuOpen(false)}
                >
                    X
                </button>
                <ul className="flex flex-col items-start md:flex-row md:items-center md:justify-end text-sm space-y-4 md:space-y-0">
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
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Link to="/resources" onClick={() => setMenuOpen(false)}>
                                Resources
                            </Link>
                        </motion.div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;