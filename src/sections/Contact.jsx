export default function Contact(){
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Feel free to reach out for opportunities or collaboration.</p>
        <form className="mt-6 grid gap-4">
          <input className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Your Name" />
          <input type="email" className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Your Email" />
          <textarea rows="5" className="rounded-xl px-4 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Your Message"></textarea>
          <button type="button" className="rounded-xl px-4 py-2 bg-sky-600 text-white hover:shadow-glow">Send</button>
        </form>
        <div className="mt-4 text-sm">
          Or email me: <a className="text-sky-600 underline" href="mailto:youremail@example.com">shubhamdhone2002@gmail.com</a>
        </div>
      </div>
    </section>
  )
}
