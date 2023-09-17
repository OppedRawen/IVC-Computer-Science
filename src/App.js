
import React,{useState,useEffect} from 'react';
import { ThemeContext } from './components/ThemeContext';

import './App.css';

import Activities from './pages/activities';
import Footer from "./components/footer";
import {Navbar,Loading} from './components';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Contact,Resources,About,Introduction,Projects,ConceptIntroductions, GuestLectures,CodingChallenge,TeamProjects} from './pages';
import NewHome from './pages/NewHome';


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
   <div className={` overflow-x-hidden bg-[#1d1d20] : 'bg-stone-100 text-gray-500'}`}>



        {isLoading ? (
          <Loading />
        ) : (
          <>
           
           <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(prev => !prev)} />
           
            <Routes>
              <Route path='/newhome' element={<NewHome />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/projects" element={<Projects />} />
              <Route path = "/activities" element={<Activities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/activities/concept-introductions" element={<ConceptIntroductions />} />
              <Route path="/activities/guest-lectures" element={<GuestLectures />} />
              <Route path="/activities/coding-challenge-workshops" element={<CodingChallenge />} />
              <Route path="/activities/team-projects-workshops" element={<TeamProjects />} />
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
