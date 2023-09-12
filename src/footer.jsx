import React from "react";
import {motion} from "framer-motion";
import { AiFillGithub,AiFillLinkedin,AiOutlineMail,AiFillInstagram} from "react-icons/ai"
import { Link } from "react-router-dom";
const Footer = ()=>{

    return(
    <footer className="footer py-8 text-sm text-[#8892b0]">
        <div className="flex flex-col justify-center items-center">
            <p>Made by David Yu</p>
            <p>@ 2023. All rights reserved</p>
        </div>


        <div className="social hidden md:flex fixed top-[50%] z-10">
        <ul className="list-none flex flex-col">
          <motion.li className="mb-5" initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: .75 }} viewport={{ once: true }}>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><AiFillGithub size={30} /></a>
          </motion.li>
          <motion.li className="mb-5" initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1 }} viewport={{ once: true }}>
            <a href="https://www.linkedin.com/school/irvine-valley-college/" target="_blank" rel="noreferrer"><AiFillLinkedin size={30} /></a>
          </motion.li>
          <motion.li className="mb-5" initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1 }} viewport={{ once: true }}>
            <a href="https://www.instagram.com/ivccsc/" target="_blank" rel="noreferrer"><AiFillInstagram size={30} /></a>
          </motion.li>
          
          <motion.li initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.5 }} viewport={{ once: true }}>
           <Link to="/contact"><AiOutlineMail size={30} /></Link>
          </motion.li>
        </ul>
      </div>
    </footer>
    )
    }

export default Footer;