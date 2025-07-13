import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import VantaBackground from './components/VantaBackground';
import Technology from './components/Technology';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [showBirds, setShowBirds] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setShowBirds(false);
    }, 10000); // ⏳ 5 seconds

    return () => clearTimeout(timer); // 🧹 Clean on unmount
  }, []);

  return (
   <div className='overflow-hidden text-natural-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className="fixed top-0 -z-10 h-full w-full">
<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.4),rgba(255,255,255,0))]"></div>
      </div>
      <div className="relative">
            {showBirds && <VantaBackground />}
      <div className="relative z-10 container mx-auto">
        <Navbar />
        <Profile />
        <About />
        <Technology />
        <Experience />
        <Projects />
        <Contact />
        </div>
    </div>
    
    </div> 
    
      
  )
}
