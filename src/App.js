
import React,{useState,useEffect} from 'react';
import { ThemeContext } from './components/ThemeContext';

import './App.css';

import Activities from './activities';
import Footer from "./footer";
import {Contact,Navbar,Resources,Projects,About,Introduction,Loading} from './components';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';



function App() {
const [isLoading,setIsLoading]=useState(true);
const [isDarkMode, setIsDarkMode] = useState(false);
useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDarkMode]);
useEffect(() => {
  
  // Simulating a 1-second delay before loading the main page
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  return () =>{
    document.body.style.overflow = "auto";
    clearTimeout(timer);
  } // Clear the timer when the component is unmounted
}, []);
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode: () => setIsDarkMode(prev => !prev) }}>
    <Router>
   <div className={` pl-5 overflow-x-hidden bg-[#1d1d20] : 'bg-stone-100 text-gray-500'}`}>



        {isLoading ? (
          <Loading />
        ) : (
          <>
           
           <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(prev => !prev)} />
           
            <Routes>
              <Route path="/resources" element={<Resources />} />
              <Route path="/projects" element={<Projects />} />
              <Route path = "/activities" element={<Activities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={
                <>
                  <About />
                  <Introduction />
                  {/* <Activities />
                  <Projects />
                  <Contact /> */}
                  
                </>
              } />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
