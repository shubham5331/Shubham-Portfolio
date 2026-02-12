import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {}
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="absolute top-10 left-10  z-20">
        <img
          src="/shubhportfolio.jpg"   
          alt="Shubham"
          className="w-40 h-40 rounded-full border-4 border-white shadow-xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-44 text-4xl md:text-5xl font-extrabold tracking-tight text-white" // mt-44 pushes text down so it sits below the photo
          >
            Hi, i'm Shubham
            Java Full-Stack Developer{" "}
            <span className="text-sky-400"></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-slate-200"
          >
            Java Full Stack Developer passionate about building scalable web
            applications with clean and efficient code.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="rounded-xl px-4 py-2 bg-sky-600 text-white hover:shadow-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl px-4 py-2 border border-slate-300 text-white hover:bg-slate-800"
            >
              Contact Me
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Right column content if any */}
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
      <div className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div className="text-xl font-semibold text-white">{value}</div>
    </div>
  )
}