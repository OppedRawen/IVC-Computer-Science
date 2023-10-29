// LoginPage.js
import React, { useState } from 'react';
import { auth,signInWithEmailAndPassword } from '../utils/firebaseConfig';
import {useNavigate} from 'react-router-dom';


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email, password);
            console.log("User successfully logged in!")
            setSuccess("User successfully logged in!");
            setTimeout(() => {
              navigate('/');  // Navigate to homepage
          }, 1000);
        
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    };

    return (
      <div>
     
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
         </div>
   
         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
           <form className="space-y-6" onSubmit={handleFormSubmit}>
             
             <div>
               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
               <div className="mt-2">
                 <input id="email" name="email" type="email" autoComplete="email"  onChange={(e) => setEmail(e.target.value)}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
               </div>
             </div>
   
             <div>
               <div className="flex items-center justify-between">
                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
               </div>
               <div className="mt-2">
                 <input id="password" name="password" type="password" autoComplete="current-password"  onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
               </div>
             </div>
   
             <div className='flex justify-center'>
               <button type="submit"  className="flex-col justify-center rounded-md bg-indigo-600 mr-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
             
             
             </div>
             {/* display user and indicate loggedIn */}
             <div className="flex justify-center">
               <p className="text-sm font-medium leading-6 text-gray-900">Create an Account? <a href="/register" className="text-indigo-600 hover:text-indigo-500">Sign Up</a></p>
             </div>
           </form>
         </div>  
         {error && <p className="text-red-500">{error}</p>}
   {success && <p className="text-green-500">{success}</p>}
         </div>
      </div>
       
    );
}

export default LoginPage;
