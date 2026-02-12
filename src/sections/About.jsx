export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-start">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
                    Hello, I’m Shubham, an Aspiring Java Full Stack Developer with experience in building modern web applications using Java, Spring Boot, and CSS. With a solid foundation in Data Structures and Algorithms, I focus on delivering clean, scalable, and efficient solutions. My career goal is to grow into a Software Development Engineer (SDE) role, where I can contribute to impactful projects and drive innovative product development.
            
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
            
            
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Card k="" v="M.Sc.computer Science. CGPA-8.02" />
            <Card k="" v="B.Sc.computer Science. CGPA-7" />

            <Card k="" v="HSC - 62.31%" />
            <Card k="" v="SSC - 70%" />
          </div>
        </div>
      </div>  
    </section>
  )
}

function Card({k, v}){
  return (
    <div className="rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
      <div className="text-xs uppercase tracking-wide text-slate-500">{k}</div>
      <div className="text-lg font-semibold">{v}</div>
    </div>
  )
}
