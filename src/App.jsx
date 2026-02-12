import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import About from './sections/About'
import Contact from './sections/Contact'

export default function App(){
  return (
    <div className="font-display">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-sm">
        © {new Date().getFullYear()} Shubham — Built with Full Stack Developement
      </footer>
    </div>
  )
}
