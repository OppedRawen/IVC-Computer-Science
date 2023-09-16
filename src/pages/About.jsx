import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const About = () => {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div className='flex flex-col justify-center p-4 md:p-10'>
      <div className="max-w-screen-lg mx-auto">
        {/* Welcome Text */}
        <motion.h3 
          className=" text-secondary-light dark:text-h3-dark text-xl sm:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Welcome to
        </motion.h3>

        {/* Main Heading */}
        <motion.h1 
          className='text-4xl sm:text-5xl py-2 text-h1-light dark:text-h1-dark font-medium'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          IVC Computer Science Club
        </motion.h1>

        {/* Typing Animation */}
        <motion.h3 
          className="flex pt-4 text-h3-light dark:text-h3-dark text-2xl sm:text-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <TypeAnimation
            sequence={[
              'A Space for Creative Ideas',
              2000, 
              'Engaging Activities',
              2000,
              'Collaborative Projects',
              2000,
              'Inspiring Innovation & Creativity',
              2000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em' }}
          />
        </motion.h3>

        {/* Image Display
        <motion.img
          className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 sm:w-80 sm:h-80 mt-5 overflow-hidden z-0"
          src="compsci2.png"
          alt="profileImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25 }}
        /> */}
<Carousel
className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 sm:w-80 sm:h-80 mt-5 overflow-hidden z-0"


  showThumbs={false}
  showStatus={false}
  infiniteLoop={true}
  autoPlay={true}
  interval={4000}
  transitionTime={500}
  stopOnHover={true}
>
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.25 }}>
    <img src="compsci2.png" alt="Image 1" className="object-cover w-full h-full" />
  </motion.div>
  
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.25 }}>
    <img src="ivccs1.jpg" alt="Image 2" className="object-cover w-full h-full"/>
  </motion.div>
  
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.25 }}>
    <img src="ivccs2.jpg" alt="Image 3" className="object-cover w-full h-full" />
  </motion.div>
  
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.25 }}>
    <img src="ivccs3.jpg" alt="Image 4" className="object-cover w-full h-full" />
  </motion.div>
  
</Carousel>


        {/* About Description */}
        <motion.p 
          className='text-sm sm:text-lg py-5 leading-7 sm:leading-8 text-p-light dark:text-p-dark'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Welcome to IVC's Computer Science Club. We aim to foster a community of technology enthusiasts, provide resources for learning, and work on innovative projects together. Whether you're a beginner or an expert, join us in our journey of exploration and creation!
        </motion.p>

      </div>

      {/* Navigation Buttons */}
      <motion.div
        className="text-4xl flex justify-center gap-10 py-3 pb-8 sm:pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.a
          href="#activities"
          className="text-2xl sm:text-3xl inline-block rounded-lg px-4 py-2 text-teal-500 border border-teal-500 bg-transparent"
          whileTap={{ scale: 0.95 }}
      
        >
          <Link to="/activities">Activities</Link>
        </motion.a>

        <motion.a
          href="#resources"
          className="text-2xl sm:text-3xl inline-block px-4 py-2 rounded-lg text-teal-500 border border-teal-500 bg-transparent"
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleLinkClick(e, "contact")}
        >
          <Link to="/resources">Resources</Link>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default About;
