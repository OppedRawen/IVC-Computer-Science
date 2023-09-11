import React from "react";
import {motion} from "framer-motion";

const About = () => {

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
   
        <div className=' flex flex-col justify-center p-10 '>

        <div className="max-w-screen-md mx-auto">
        <h3 className="text-[#54d5bb]">Welcome to</h3>    
<h1 className='text-6xl py-2 text-[#cacaca] font-medium'>IVC CompSci Club</h1>
<h3 className='text-4xl py-2 text-[#8892b0]'>Inspiring Innovation & Creativity</h3>
        <img className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-5 overflow-hidden" src="compsci2.png" alt="profileImage"></img>
        <p className='text-lg py-5 leading-8 text-[#cacaca]'>
Welcome to IVC's Computer Science Club. We aim to foster a community of technology enthusiasts, provide resources for learning, and work on innovative projects together. Whether you're a beginner or an expert, join us in our journey of exploration and creation!
</p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-3 pb-8 ">
        {/* <a href="https://github.com/OppedRawen"><AiFillGithub /></a>
        

        
        <a href='https://www.linkedin.com/in/dawei-yu-578138227/'><AiFillLinkedin /></a>
        <AiOutlineMail /> */}
        <motion.a
  href="#projects"
  className=" text-3xl inline-block rounded-lg px-4 py-2 text-teal-500 border border-teal-500 bg-transparent"
  whileTap={{ scale: 0.95 }}
  onClick={(e) => handleLinkClick(e, "projects")}
>
  <span className="">Projects</span>
</motion.a>
<motion.a
  href="#contact"
  className=" text-3xl inline-block px-4 py-2 rounded-lg text-teal-500 border border-teal-500 bg-transparent"
  whileTap={{ scale: 0.95 }}
  onClick={(e) => handleLinkClick(e, "contact")}
>
  <span className="">Contact Us!</span>
</motion.a>
        </div>
      </div>
     
    )
};

export default About;