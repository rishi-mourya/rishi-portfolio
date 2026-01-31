import { useState, useEffect } from 'react'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Layout/Footer'

function App() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   // Simulate initial loading
  //   setTimeout(() => setLoading(false), 1500)
  // }, [])

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen bg-dark-950">
  //       <div className="flex flex-col items-center gap-4">
  //         <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
  //         <p className="text-dark-300 font-medium">Loading Portfolio...</p>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="min-h-screen bg-dark-950 pt-4">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
