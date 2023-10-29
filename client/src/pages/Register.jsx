// RegisterPage.js
import React, { useState } from 'react';
import { auth, db,createUserWithEmailAndPassword,collection,addDoc } from '../utils/firebaseConfig';



function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName,setUserName] = useState('');
    const [successMessage,setSuccessMessage] = useState('');
    const [error, setError] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);
setSuccessMessage(null);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth,email, password);
            const user = userCredential.user;

         const docRef = await addDoc(collection(db,"users"),{
            email:email,
            firstName:firstName,
            lastName:lastName,
            userName:userName,
         })
            console.log("User successfully registered!", docRef.id)
            setSuccessMessage("User registered successfully!")
            // TODO: Redirect user to the main page or dashboard after registration
        } catch (err) {
            setError(err.message);
            console.log(err.code);
            console.log(err);
        }
    };

    return (

<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Register an account</h2>
    </div>

    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>

        <form onSubmit={handleRegister} className='space-y-6'>
            <div >
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">User name</label>
                <input name='username' type='text' required className=' block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' onChange={(e) => setUserName(e.target.value)} ></input>
            </div>

            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input name="email" type="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setEmail(e.target.value)}  />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2">
              <input name="password" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
            <div className="mt-2">
              <input name="firstName" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setFirstName(e.target.value)}  />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
            <div className="mt-2">
              <input name="lastName" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e) => setLastName(e.target.value)}  />
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="flex-col justify-center rounded-md bg-indigo-600 mr-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
          </div>
          {/* already have an account? */}
          <div className="flex justify-center">
            <p className="text-sm font-medium leading-6 text-gray-900">Already have an account? <a href="/login" className="text-indigo-600 hover:text-indigo-500">Login</a></p>
          </div>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
{error && <p className="text-red-500">{error}</p>}

        </form>
    </div>

</div>
        // <div>
        //     <h2>Register</h2>
        //     {error && <p>{error}</p>}
        //     <form onSubmit={handleRegister}>
        //         <input 
        //             type="text" 
        //             placeholder="First Name" 
        //             value={firstName}
        //             onChange={(e) => setFirstName(e.target.value)} 
        //         />
        //         <input 
        //             type="text" 
        //             placeholder="Last Name" 
        //             value={lastName}
        //             onChange={(e) => setLastName(e.target.value)} 
        //         />
        //         <input 
        //             type="email" 
        //             placeholder="Email" 
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)} 
        //         />
        //         <input 
        //             type="password" 
        //             placeholder="Password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)} 
        //         />
        //         <button type="submit">Register</button>
        //     </form>
        // </div>
    );
}

export default RegisterPage;
