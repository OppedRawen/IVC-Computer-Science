
import React,{useState,useEffect} from 'react';

import './App.css';

import Activities from './activities';
import Footer from "./footer";
import {Contact,Navbar,Resources,Projects,About,Introduction,Loading} from './components';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
const [isLoading,setIsLoading]=useState(true);
useEffect(() => {
  // Simulating a 1-second delay before loading the main page
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return () => clearTimeout(timer); // Clear the timer when the component is unmounted
}, []);
  return (
    <Router>
    <div className=" bg-[#1d1d20] px-10">
    {isLoading ? (
      <Loading />
    ) : (
      <>
        <header className=" min-h-screen">
          <Navbar />
          <About />
        </header>
        <Introduction />
        <Activities />
        <Resources />
        <Projects />
        <Contact />
        <Footer />
      </>
    )}
  </div>
  </Router>
  );
}

export default App;
