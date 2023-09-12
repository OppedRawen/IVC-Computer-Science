import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

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
      <div className="max-w-screen-md mx-auto">
        {/* Welcome Text */}
        <motion.h3 
          className="text-[#54d5bb] text-xl sm:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Welcome to
        </motion.h3>

        {/* Main Heading */}
        <motion.h1 
          className='text-4xl sm:text-5xl py-2 text-[#cacaca] font-medium'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          IVC CompSci Club
        </motion.h1>

        {/* Typing Animation */}
        <motion.h3 
          className="flex pt-4 text-[#8892b0] text-2xl sm:text-3xl"
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

        {/* Image Display */}
        <motion.img
          className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 sm:w-80 sm:h-80 mt-5 overflow-hidden z-0"
          src="compsci2.png"
          alt="profileImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.25 }}
        />

        {/* About Description */}
        <motion.p 
          className='text-sm sm:text-lg py-5 leading-7 sm:leading-8 text-[#cacaca]'
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
          href="#projects"
          className="text-2xl sm:text-3xl inline-block rounded-lg px-4 py-2 text-teal-500 border border-teal-500 bg-transparent"
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleLinkClick(e, "projects")}
        >
          <span className="">Projects</span>
        </motion.a>

        <motion.a
          href="#contact"
          className="text-2xl sm:text-3xl inline-block px-4 py-2 rounded-lg text-teal-500 border border-teal-500 bg-transparent"
          whileTap={{ scale: 0.95 }}
          onClick={(e) => handleLinkClick(e, "contact")}
        >
          <span className="">Contact Us!</span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default About;
