import React from 'react';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import AboutTeam from './components/AboutTeam';

function App() {

  const [mode, setMode] = useState('dark');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = " #1a1a1a";
      document.body.style.color = 'white';
      // showAlert(" Dark mode has been enabled ","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      // showAlert(" Light mode has been enabled ","success");
    }
  }

  return (
      <div className="app-container"> 
        <Navbar title="TextVerse" mode={mode} toggleMode={toggleMode} />
        {
            <>
            <div className="about">
            <h2>About</h2>
            </div>
            <div className="container my-4">
            <About/>
            </div>
            <div className="about-team">
              <h2>Our Dedicated Team</h2>
            </div>
            <AboutTeam/>
            </>
          }
           <Footer mode={mode}/>
           </div>
  );
}

export default App;

