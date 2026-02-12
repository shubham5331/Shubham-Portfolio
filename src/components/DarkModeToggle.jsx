import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggle = () => {
    const root = document.documentElement
    const next = !isDark
    setIsDark(next)
    if (next) {
      root.classList.add('dark')
      localStorage.setItem('theme','dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  }

  return (
    <button onClick={toggle} className="rounded-2xl px-3 py-1.5 text-sm font-medium border border-slate-300 dark:border-slate-700 hover:shadow-glow transition">
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
