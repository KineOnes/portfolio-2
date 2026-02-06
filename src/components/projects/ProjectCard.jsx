export default function ProjectCard({ project }) {
    const { title, description, image, tags, repoUrl, liveUrl } = project;
  
    return (
      <article className="relative overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">
        <div className="grid gap-6 p-6 md:grid-cols-[1fr_360px] md:p-8">
          {/* Left content */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                {title}
              </h3>
  
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {description}
              </p>
  
              {/* Tags */}
              {Array.isArray(tags) && tags.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-yellow-400/90 px-3 py-1 text-xs font-semibold text-purple-950"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
  
            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2 text-sm font-medium text-purple-950 hover:bg-yellow-300 transition"
                >
                  View repo
                </a>
              )}
  
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm text-white hover:bg-white/10 transition"
                >
                  Live site
                </a>
              )}
            </div>
          </div>
  
          {/* Right image */}
          <div className="relative">
            <div className="h-full min-h-[220px] w-full overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20">
              {image ? (
                <img
                  src={image}
                  alt={`${title} screenshot`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xs text-white/40">
                  No image
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }
  