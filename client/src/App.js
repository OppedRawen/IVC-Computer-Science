
import React,{useState,useEffect} from 'react';
import { ThemeContext } from './components/ThemeContext';

import './App.css';

import Activities from './pages/activities';
import Footer from "./components/footer";
import {Navbar} from './components';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Contact,Resources,About,Introduction,Events,ConceptIntroductions, GuestLectures,CodingChallenge,TeamProjects,LoginPage,RegisterPage} from './pages';
import NewHome from './pages/NewHome';


function App() {

const [isDarkMode, setIsDarkMode] = useState(false);
useEffect(() => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode: () => setIsDarkMode(prev => !prev) }}>
    <Router>

   <div className={`  overflow-x-hidden shadow-lg bg-primary-light dark:bg-primary-dark `}>




      
          <>
           
           <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(prev => !prev)} />
           
            <Routes>
              <Route path='/newhome' element={ <>
                  <About />
                  <Introduction />
                  {/* <Activities />
                  <Projects />
                  <Contact /> */}
                  
                </>} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/events" element={<Events />} />
              <Route path = "/activities" element={<Activities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/activities/concept-introductions" element={<ConceptIntroductions />} />
              <Route path="/activities/guest-lectures" element={<GuestLectures />} />
              <Route path="/activities/coding-challenge-workshops" element={<CodingChallenge />} />
              <Route path="/activities/team-projects-workshops" element={<TeamProjects />} />
              <Route path="/" element={
               <NewHome/>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Footer />
          </>
    
      </div>
    </Router>
    </ThemeContext.Provider>
  );
}

export default App;
