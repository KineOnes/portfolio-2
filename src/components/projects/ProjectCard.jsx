export default function ProjectCard({ project }) {
    return (
      <article className="bg-white text-black rounded-lg p-6 shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="rounded mb-4"
        />
  
        <h3 className="text-xl font-bold mb-2">
          {project.title}
        </h3>
  
        <p className="mb-4">
          {project.description}
        </p>
  
        <div className="flex gap-4">
          <a
            href={project.repoUrl}
            target="_blank"
            className="text-purple-700 font-semibold"
          >
            GitHub
          </a>
  
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-purple-700 font-semibold"
            >
              Live
            </a>
          )}
        </div>
      </article>
    );
  }
  