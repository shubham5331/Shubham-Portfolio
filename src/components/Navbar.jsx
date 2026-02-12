import DarkModeToggle from './DarkModeToggle'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur bg-white/70 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#home" className="font-bold text-lg">
          Shubham<span className="text-sky-600">.Dev</span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-3 text-sm">
          <a href="#about" className="rounded-full px-4 py-2 bg-sky-600 text-white hover:bg-slate-800 transition duration-200">About</a>
          <a href="#skills" className="rounded-full px-4 py-2 bg-sky-600 text-white hover:bg-slate-800 transition">Skills</a>
          <a href="#projects" className="rounded-full px-4 py-2 bg-sky-600 text-white hover:bg-slate-800 transition">Projects</a>
          <a href="#contact" className="rounded-full px-4 py-2 bg-sky-600 text-white hover:bg-slate-800 transition">Contact</a>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          <a 
            href="\Shubham_Dhone_software_Developer_java_Full Stack_Resume.pdf" 
            className="hidden sm:inline-block rounded-full px-4 py-2 text-sm font-medium bg-sky-600 text-white hover:shadow-glow transition"
          >
            Download CV
          </a>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}