

// export default Introduction;
import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
    return (
        <div id="about" className="max-w-screen-lg m-auto md:pl-20 px-8 py-24 sm:py-32 text-gray-400">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
            >
                About Our Club
            </motion.h2>

            {/* Image for mobile view */}
            <motion.img
                src="compsi3.jpg"
                className="shadow-lg rounded-md md:hidden w-full max-w-xs mx-auto mt-4 mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
            />

            <div className="w-full flex flex-col md:flex-row justify-center items-start">
                <div className="md:w-1/2">
                  
                <motion.p
    className="text-[#cacaca] mt-4 text-[16px] leading-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.1 }}
    viewport={{ once: true }}  
>
    Welcome to the Computer Science Club, where we dive deep into the enchanting world of coding every <span className="font-bold text-[#54d5bb]">Wednesday at 11am</span>. Our dedicated sessions rotate between topic introductions — ranging from programming languages like <span className="font-bold text-[#54d5bb]">Java</span>, <span className="font-bold text-[#54d5bb]">Python</span>, and <span className="font-bold text-[#54d5bb]">C++</span> to diverse frameworks — guest lectures from industry experts, and engaging coding challenges.
</motion.p>

<motion.p
    className="text-[#cacaca] mt-4 text-[16px] leading-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.15 }}
    viewport={{ once: true }}  
>
    Hands-on experience is at the core of our club. We organize two main team project events focusing on <span className="font-bold text-[#54d5bb]">game development</span> and <span className="font-bold text-[#54d5bb]">web development</span>, offering members the chance to work on substantial, long-term projects. The schedules for these extensive projects will be announced in due course.
</motion.p>

<motion.p
    className="text-[#cacaca] mt-4 text-[16px] leading-6"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 0.2 }}
    viewport={{ once: true }}  
>
    Learning with us is not just about coding; it's an experience. We ensure our sessions are enjoyable by bringing in delectable treats like <span className="font-bold text-[#54d5bb]">pizza</span> and <span className="font-bold text-[#54d5bb]">burgers</span>. After all, a coder's mind works best when well-fed!
</motion.p>
            
                </div>

                {/* Image for PC view */}
                <div className="hidden md:flex md:w-1/2 justify-center pl-12">
                    <motion.img
                        src="compsi3.jpg"
                        className="shadow-lg rounded-md"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>
        </div>
    )
};

export default Introduction;

