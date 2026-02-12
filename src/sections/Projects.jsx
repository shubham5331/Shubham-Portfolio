import { motion } from 'framer-motion'

const items = [
  {
    title: 'Banking & Payment Solution',
    desc: 'Secure account management, deposits, withdrawals, fund transfers, and transaction history.',
    tech: ['Html','Spring Boot','MySQL','React','Css'],
    link: '#'
  },
  {
    title: 'Employee Management System',
    desc: 'Employee records, roles, attendance and payroll with authentication & CRUD.',
    tech: ['html,Spring Boot','MySQL','React','Css'],
    link: '#'
  },
  {
    title: 'Personal Portfolio Web',
    desc: ' My Personal portfolio website.',
    tech: ['Html','Css','React','javascript',],
    link: '#'
  },
]

export default function Projects(){
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">A selection of full‑stack and Web projects.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="block rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:shadow-glow bg-white/70 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">View</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs rounded-xl px-2 py-1 border border-slate-200 dark:border-slate-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
