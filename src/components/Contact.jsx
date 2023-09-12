import React,{useState} from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [verification, setVerification] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, process.env.REACT_APP_API_KEY)
        .then((result) => {
            console.log(result.text);
            console.log('message sent');
            setVerification("Message Sent!, looking forward to connecting!");
        }, (error) => {
            console.log(error.text);
            console.log('message failed');
            setVerification("Message Failed to Send!");
        });

        setEmail("");
        setName("");
        setMessage("");


    };

   

 


return(
    <section className=" " id="contact">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-medium text-center text-[#8892b0] dark:text-white">Contact</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please feel free to reach out with any questions or suggestions, and I will do my best to respond as soon as possible. I look forward to hearing from you!</p>
        
      <form ref={form} onSubmit={sendEmail} className="space-y-8 ">
        <div>
      <label className="block mb-2 text-sm font-medium text-[#8892b0] dark:text-gray-300">Name</label>
      <input type="text" name="user_name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
      </div>
      <div>
      <label className="block mb-2 text-sm font-medium text-[#8892b0] dark:text-gray-300">Email</label>
      <input type="email" name="user_email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
      </div>
      <div>
      <label className="block mb-2 text-sm font-medium text-[#8892b0] dark:text-gray-300">Message</label>
      <textarea name="message"  id = 'message' onChange={(e) => setMessage(e.target.value)} value ={message} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  />
      </div>
      <input type="submit" value="Send" className="py-3 px-5 text-sm border border-teal-500 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 " />
  
    </form>
    {verification && (
          <div className="mt-4 text-center">
            {window.alert(verification)}
          </div>
        )}
  </div>
</section>
)
};

export default Contact;