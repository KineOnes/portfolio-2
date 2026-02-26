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
            Hi, I'm Kine — a creative front-end developer with a background in art and design. 
            I enjoy building clean, intuitive web experiences that combine structure with Scandinavian simplicity.

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
            Currently studying Front-End Development at Noroff, I’m passionate about turning ideas into responsive and user-friendly digital solutions.

            With a background in Art History, Graphic Design, and Illustration, I bring a strong visual perspective into my development work. I love working with React, modern JavaScript, and clean UI systems.

            When I’m not coding, you’ll probably find me drinking coffee, exploring nature, or learning something new.

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
          <p className="font-semibold">Contact me</p>
          <p className="mt-2 text-sm text-white/75">
            Contact me by sending a message on Behance
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
          <a
  href="https://www.behance.net/kineonesv"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-full bg-white/15 px-6 py-2 text-sm hover:bg-white/20"
>
  BEHANCE
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
