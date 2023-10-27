// LoginPage.js
import React, { useState } from 'react';
import { auth,signInWithEmailAndPassword } from '../utils/firebaseConfig';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email, password);
            console.log("User successfully logged in!")
            // TODO: Redirect user to the main page or dashboard after login
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
