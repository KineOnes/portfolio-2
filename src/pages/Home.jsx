import ProjectsList from "../components/projects/ProjectsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-900 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-14">
        <div className="flex items-center justify-between gap-6 border-b border-white/20 pb-6">
          <p className="text-sm tracking-widest text-white/70">ONESDESIGN</p>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#about">ABOUT</a>
            <a className="hover:text-white" href="#projects">PROJECTS</a>
            <a className="hover:text-white" href="#contact">CONTACT</a>
            <a className="hover:text-white" href="#github">GITHUB</a>
          </nav>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:items-center">
          {/* Welcome */}
          <div className="space-y-4">
            <p className="text-xs tracking-widest text-white/70">WELCOME</p>
            <p className="text-white/80">
              Kort intro om deg (1–2 setninger). Bytt ut lorem ipsum.
            </p>
            <a
              href="#projects"
              className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm hover:bg-white/20"
            >
              PROJECTS
            </a>
          </div>

          {/* Avatar/illustration placeholder */}
          <div className="mx-auto h-56 w-56 rounded-full bg-white/20 md:h-72 md:w-72" />

          {/* About me */}
          <div id="about" className="space-y-4 md:text-right">
            <p className="text-xs tracking-widest text-white/70">ABOUT ME</p>
            <p className="text-white/80">
              Litt om hva du kan, hva du liker å bygge, og tech du bruker.
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm hover:bg-white/20"
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="border-t border-white/20 pt-8">
          <h2 className="text-center text-sm tracking-widest text-white/70">
            PROJECTS
          </h2>
        </div>

        <div className="mt-8">
          <ProjectsList />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="border-t border-white/20 pt-8">
          <h2 className="text-center text-sm tracking-widest text-white/70">
            CONTACT
          </h2>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 text-purple-900">
          <p className="font-semibold">Kontakt meg</p>
          <p className="mt-2 text-sm text-purple-900/70">
            Legg inn e-post + evt. LinkedIn her.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a className="rounded-full bg-purple-900 px-4 py-2 text-sm text-white" href="mailto:din@email.no">
              Send e-post
            </a>
            <a className="rounded-full bg-purple-100 px-4 py-2 text-sm" href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Github */}
      <section id="github" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="border-t border-white/20 pt-8">
          <h2 className="text-center text-sm tracking-widest text-white/70">
            GITHUB
          </h2>
        </div>

        <div className="mt-8 rounded-2xl bg-white/10 p-6">
          <p className="text-white/80">
            Lenke til GitHub-profil + evt. “profile README”.
          </p>

          <a
            className="mt-4 inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-medium text-purple-950 hover:bg-yellow-300"
            href="https://github.com/KineOnes"
            target="_blank"
            rel="noreferrer"
          >
            View profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} ONES DESIGN
        </div>
      </footer>
    </div>
  );
}
