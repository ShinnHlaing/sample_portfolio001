// To add dark and light mode
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'
import { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={`${darkMode && "dark"} overflow-x-hidden text-neutral-500 antialiased selection:bg-cyan-300 selection:text-cyan-900`} >
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className='absolute top-0 z-[-2] h-screen w-screen bg-[#F7F4F3] dark:bg-neutral-950 bg-[radial-gradiet(ellipse_80%_at_50%_-20%,rgba(120,119,198,0.3), rgba(255,255,255,0))]'></div>
      </div>

      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Project />
        <Contact />
      </div>
      <button onClick={toggleDarkMode} className="fixed top-1 lg:top-3 lg:right-3 right-0 text-2xl">
        {darkMode ?
          <>
            <MdLightMode className='text-neutral-200' />
          </> :
          <>
            <MdDarkMode className='text-neutral-900' />
          </>}
      </button>
    </div>
  )
}

export default App