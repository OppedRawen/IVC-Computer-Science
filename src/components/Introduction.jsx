

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
                    {/* All your text content goes here */}
                    {/* ... (no changes) ... */}
                    <motion.p
                className="text-[#cacaca] mt-4 text-[16px] leading-6"
                 initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}  
                >
                     Welcome to the Computer Science Club! We are a collective of motivated students eager to immerse fellow learners into the captivating realm of computer science. Our mission is to demystify programming, starting with the basics, and gradually progressing towards more advanced topics.
                    </motion.p>
                     <motion.p
                className="text-[#cacaca] mt-4 text-[16px] leading-6"
                 initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                viewport={{ once: true }}  
                >
                     Our journey together will explore various programming languages, including <span className="font-bold text-[#54d5bb]">Java</span>, <span className="font-bold text-[#54d5bb]">Python</span>, <span className="font-bold text-[#54d5bb]">C++</span>, and <span className="font-bold text-[#54d5bb]">Javascript</span>. Furthermore, we'll dive into fundamental concepts such as <span className="font-bold text-[#54d5bb]">algorithms</span> and <span className="font-bold text-[#54d5bb]">data structures</span> that form the backbone of computational thinking.
                    </motion.p>
                     <motion.p
                className="text-[#cacaca] mt-4 text-[16px] leading-6"
                 initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}  
                >
                     Beyond just theory, our club offers hands-on experience. We hold regular <span className="font-bold text-[#54d5bb]">coding workshops</span>, tackling challenges that will sharpen your problem-solving skills. Our collaborative projects span various domains, from game development to web applications, providing an opportunity to apply knowledge in real-world scenarios.
                    </motion.p>
                     <motion.p
                className="text-[#cacaca] mt-4 text-[16px] leading-6"
                 initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                viewport={{ once: true }}  
                >
                     And let's not forget the fun part! Every other week, we celebrate our progress and camaraderie with delightful treats like <span className="font-bold text-[#54d5bb]">pizza</span> and <span className="font-bold text-[#54d5bb]">burgers</span>. After all, what's coding without some comfort food, right?
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

