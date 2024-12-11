import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

// Import RetroGrid for the background
import RetroGrid from './Components/ui/retro-grid';

function App() {
  return (
    <div className="relative w-full h-full bg-gray-900">
      {/* Retro Grid Background */}
      <RetroGrid className="absolute inset-0 w-full h-full -z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Main App Content */}
      <div className="relative">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100">
          <AboutMe />
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
