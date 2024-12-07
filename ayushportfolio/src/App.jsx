import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutMe from './Components/Aboutme';
import Skills from './Components/Skills';

// Import the RetroGrid component
import RetroGrid from './Components/ui/retro-grid';

function App() {
  return (
    <div className="relative w-full h-full">
      {/* Retro Grid Background */}
      <RetroGrid className="absolute inset-0 w-full h-full -z-10" />

      {/* Main App Content */}
      <div className="relative">
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
