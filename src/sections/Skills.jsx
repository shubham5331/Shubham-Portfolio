const skills = [
  'Java','Spring Boot','Spring Data JPA','MySQL','REST APIs',
  'problem solving','Git','GitHub','HTML','CSS','JavaScript'
]

export default function Skills(){
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Core technologies I use to build production‑ready apps.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map(s => (
            <div key={s} className="rounded-xl px-3 py-2 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900 text-sm">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
