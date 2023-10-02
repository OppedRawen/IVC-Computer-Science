// SocialLinks.jsx
import { Link } from "react-router-dom";
import React from "react";
import {motion} from "framer-motion";
import { AiFillGithub,AiFillLinkedin,AiOutlineMail,AiFillInstagram} from "react-icons/ai"
import {BsDiscord} from "react-icons/bs"
const SocialLinks = ({ layout }) => {

  const containerClasses = layout === 'horizontal' ? 'flex-row space-x-4' : 'flex-col space-y-4';
  const itemClasses = layout === 'horizontal' ? 'mb-0' : 'mb-0';

  return (
    <div className={`flex pl-5 ${containerClasses}`}>
        <motion.div className={itemClasses} initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: .75 }}>
          <a href="https://discord.gg/WqRJ6WKHWm" target="_blank" rel="noreferrer"><BsDiscord size={30} className="text-primary-light dark:text-primary-dark" /></a>
        </motion.div>
        <motion.div className={itemClasses} initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1 }}>
          <a href="https://www.linkedin.com/school/irvine-valley-college/" target="_blank" rel="noreferrer"><AiFillLinkedin  size={30} className="text-primary-light dark:text-primary-dark" /></a>
        </motion.div>
        <motion.div className={itemClasses} initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1 }}>
          <a href="https://www.instagram.com/ivccsc/" target="_blank" rel="noreferrer"><AiFillInstagram size={30}  className="text-primary-light dark:text-primary-dark"/></a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 1.5 }}>
          {/* <a href="mailto:youremail@example.com"><AiOutlineMail size={30} /></a> */}
          <Link to="/contact"><AiOutlineMail size={30}  className="text-primary-light dark:text-primary-dark"/></Link>
        </motion.div>
    </div>
  );
}

export default SocialLinks;
