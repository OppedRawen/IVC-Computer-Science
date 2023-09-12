import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [verification, setVerification] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
      // ... your sendEmail logic
    };

    const fieldVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="" id="contact">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-medium text-center text-[#8892b0] dark:text-white">Contact</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please feel free to reach out with any questions or suggestions, and I will do my best to respond as soon as possible. I look forward to hearing from you!</p>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-8 ">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fieldVariants}
                        transition={{ duration: 0.5 }}
                    >
                        <label className="block mb-2 text-sm font-medium text-[#8892b0] dark:text-gray-300">Name</label>
                        <input type="text" name="user_name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fieldVariants}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <label className="block mb-2 text-sm font-medium text-[#8892b0] dark:text-gray-300">Email</label>
                        <input type="email" name="user_email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fieldVariants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <label className="block mb-2 text-sm font-medium text-[#8892b0] dark:text-gray-300">Message</label>
                        <textarea name="message"  id = 'message' onChange={(e) => setMessage(e.target.value)} value ={message} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fieldVariants}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <input type="submit" value="Send" className="py-3 px-5 text-sm border border-teal-500 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 " />
                    </motion.div>
                </form>

                {verification && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-4 text-center"
                    >
                        {window.alert(verification)}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Contact;
