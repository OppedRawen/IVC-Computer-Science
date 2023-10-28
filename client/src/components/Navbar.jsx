

import React from "react";
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';
import {MdOutlineDarkMode} from 'react-icons/md';
import {MdOutlineLightMode} from 'react-icons/md';

import { onAuthStateChanged } from "@firebase/auth";
import { getDoc, doc } from "@firebase/firestore";
import { auth, db } from "../utils/firebaseConfig";
const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState('up');
   
   
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        if (scrollY > lastScrollY) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
        lastScrollY = scrollY;
      };
   
  
      window.addEventListener('scroll', updateScrollDirection);
      return () => window.removeEventListener('scroll', updateScrollDirection);
    }, []);
  
    return scrollDirection;
};

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState(window.innerWidth > 768 ? 'auto' : '100vh');
    const scrollDirection = useScrollDirection();
    const [scrollYPosition, setScrollYPosition] = useState(0);
    
    const defaultImageUrl = "https://via.placeholder.com/150";
    const [user, setUser] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        console.log("Firebase user: ", currentUser);
        if (currentUser) {
          setUser(currentUser);
          const userDoc = doc(db, "users", currentUser.uid);
          const userData = await getDoc(userDoc);
          if(userData.exists() && userData.data().profileImage) {
              setProfileImageUrl(userData.data().profileImage);
          } else {
              setProfileImageUrl(defaultImageUrl);
          }
      } else {
          setUser(null);
          setProfileImageUrl(null);
      }
        // Once we get the authentication state, we set loading to false
        setLoading(false);
    }
    
    );

    return () => unsubscribe();
    }, []);
    useEffect(() => {
      const updateScrollYPosition = () => {
          setScrollYPosition(window.pageYOffset);
      };
  
      window.addEventListener('scroll', updateScrollYPosition);
      return () => window.removeEventListener('scroll', updateScrollYPosition);
  }, []);
const toggleMenu = () => {
  if (!menuOpen && window.innerWidth <= 768) { 
      setMenuHeight(`${document.body.scrollHeight}px`);
    //   document.body.style.overflow = 'hidden';
  } else {
      document.body.style.overflow = 'auto'; // Ensure overflow is set to auto whenever the menu is not fully opened in mobile view.
      if (window.innerWidth <= 768) {
          setMenuHeight('100vh');
      } else {
          setMenuHeight('auto');
      }
  }
  setMenuOpen(prev => !prev);
};

console.log("User: ", user);

    return (
      <>
        
      <nav style={{ top: (scrollDirection === 'down' && scrollYPosition > 0) ? '-100px' : '0', transition: 'top 0.3s' }} className="mb-12 flex transition-all duration-800 justify-between text-primary-light dark:text-primary-dark z-20">


            <Link to="/" className="text-lg pl-5 font-burtons font-semibold">
                <HiOutlineDesktopComputer className=" mt-10 text-3xl font-bold w-10 h-10 md:mt-10 sm:mt-5" />
            </Link>
          
            <div className="md:hidden">
                <GiHamburgerMenu onClick={toggleMenu} className=" mt-10 cursor-pointer w-10 h-5" />
            </div>
            
            <div className={` absolute top-0 right-0 w-64 bg-primary-light dark:bg-primary-dark transform ${menuOpen ? 'translate-x-0 pt-10'  : 'translate-x-full'} transition-transform duration-300 ease-in-out md:static md:transform-none z-50`}  style={{minHeight:menuHeight}}>
               {/* Close Button */}
               <button 
                    className="md:hidden absolute top-2 right-2"
                    onClick={() => setMenuOpen(false)}
                >
                    X
                </button>
                <ul className="flex flex-col items-start md:flex-row md:items-center md:justify-end text-sm space-y-4 md:space-y-0">
                  <li className=" whitespace-nowrap ml-6 mr-6 font-semibold hover:text-[#54d5bb]
                  "> 
                    <a className=''href="https://docs.google.com/forms/d/e/1FAIpQLScFFgpQrAgSf_Ko2wNFYRwmF4tewmxXheuddzMGdZf-neytUQ/viewform">Join our Club</a>
                  </li>
                <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
                        <motion.div whileTap={{ scale: 0.95 }}>
                            <Link to="/resources" onClick={() => setMenuOpen(false)}>
                                Resources
                            </Link>
                        </motion.div>
                    </li>
                    <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
                    <motion.div whileTap={{ scale: 0.95 }}>
                <Link to="/activities" onClick={() => setMenuOpen(false)}>Activities</Link>
                    </motion.div>

                    </li>
                   
                    <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
                        <motion.div
                            href="#contact"
                            whileTap={{ scale: 0.95 }}
                          
                        >
                           <Link to="/contact" onClick={() => setMenuOpen(false)}> Contact</Link>
                        </motion.div>
                    </li>
                    <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
                        <motion.div
                            href="#events"
                            whileTap={{ scale: 0.95 }}
                      
                        >
                          <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>

                          
                        </motion.div>
                    </li>
                  
                 
                  
  
         
{ loading ?( <span>Loading...</span>):(
    user ? (
      <>
            <img 
                src={profileImageUrl || defaultImageUrl} 
                alt="User Profile" 
                className="rounded-full w-8 h-8 cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
                <div className="relative absolute top-10 right-0 bg-white dark:bg-black p-2 rounded shadow-lg">
                    <Link to="/user-profile" onClick={() => setShowDropdown(false)}>UserProfile</Link>
                    <button onClick={() => {
                        auth.signOut(); // Sign out the user
                        setShowDropdown(false);
                    }}>
                        Logout
                    </button>
                </div>
            )}
      </>
    ) : (
        <li className="ml-6 mr-6 font-semibold hover:text-[#54d5bb]">
            <motion.div whileTap={{ scale: 0.95 }}>
                <Link to="/register" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </motion.div>
        </li>
    )
)
}
                    <li>
  <button 
    onClick={toggleDarkMode} 
    className="w-1/2 m-2 p-3 flex justify-center items-center text-p-light dark:text-p-dark hover:text-gray-800 cursor-pointer"
  >
    {isDarkMode ? <MdOutlineDarkMode  className="w-20 h-20"/> : <MdOutlineLightMode className="w-20 h-20" />}
  </button>
</li>
                   
                </ul>
                <div className="ml-5 mt-12 md:hidden xl:hidden">
            <SocialLinks layout="horizontal"/>
         </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;