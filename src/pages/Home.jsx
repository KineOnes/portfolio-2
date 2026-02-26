import ProjectsList from "../components/projects/ProjectsList";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-[#3b1457] via-[#4a1b6b] to-[#2a0f3f]">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-[90px]" />
        <div className="absolute right-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-white/5 blur-[90px]" />
        <div className="absolute left-[-140px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-white/5 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="mx-auto max-w-6xl px-6 pt-10">
        <div className="flex items-center justify-between gap-6 border-b border-white/20 pb-6">
          <p className="text-sm tracking-widest text-white/70">ONESDESIGN</p>

          <nav className="hidden items-center gap-8 text-xs tracking-widest text-white/70 md:flex">
            <a className="hover:text-white" href="#about">
              ABOUT
            </a>
            <a className="hover:text-white" href="#projects">
              PROJECTS
            </a>
            <a className="hover:text-white" href="#contact">
              CONTACT
            </a>
            <a className="hover:text-white" href="#github">
              GITHUB
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-14">
        <div className="mt-6 grid gap-10 md:grid-cols-3 md:items-center">
          {/* Welcome */}
          <div className="space-y-4">
            <p className="text-xs tracking-widest text-white/70">WELCOME</p>
            <p className="text-sm leading-relaxed text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-2 text-sm hover:bg-white/20"
            >
              PROJECTS
            </a>
          </div>

          {/* Avatar / illustration */}
<div className="mx-auto h-56 w-56 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/20 md:h-72 md:w-72">
  <img
    src="/profileImage.avif"
    alt="Profile illustration"
    className="h-full w-full object-cover"
  />
</div>


          {/* About me */}
          <div id="about" className="space-y-4 md:text-right">
            <p className="text-xs tracking-widest text-white/70">ABOUT ME</p>
            <p className="text-sm leading-relaxed text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-2 text-sm hover:bg-white/20"
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="border-t border-white/20 pt-8">
          <h2 className="text-center text-xs tracking-widest text-white/70">
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
          <h2 className="text-center text-xs tracking-widest text-white/70">
            CONTACT
          </h2>
        </div>

        <div className="mt-8 rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
          <p className="font-semibold">Kontakt meg</p>
          <p className="mt-2 text-sm text-white/75">
            Legg inn e-post + evt. LinkedIn her.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-medium text-purple-950 hover:bg-yellow-300"
              href="mailto:din@email.no"
            >
              Send e-post
            </a>

            <a
              className="rounded-full bg-white/15 px-5 py-2 text-sm text-white hover:bg-white/20"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Github */}
      <section id="github" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="border-t border-white/20 pt-8">
          <h2 className="text-center text-xs tracking-widest text-white/70">
            GITHUB
          </h2>
        </div>

        <div className="mt-8 rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
          <p className="text-sm text-white/80">
            Lenke til GitHub-profil + evt. “profile README”.
          </p>

          <a
            className="mt-4 inline-flex rounded-full bg-yellow-400 px-5 py-2 text-sm font-medium text-purple-950 hover:bg-yellow-300"
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
