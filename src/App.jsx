import React from 'react'
import MouseFollower from './components/MouseFollower'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Education from './components/Education';

export default function App() {
  return(
    <>
      <MouseFollower />
  
    <div className="px-6 sm:px-10 md:px-20 lg:px-40 py-10 space-y-32">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education /> 
      <Contact />
        </div>
    </>

  )
}
