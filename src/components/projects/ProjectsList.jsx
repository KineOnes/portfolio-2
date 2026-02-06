import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  return (
    <section id="projects" className="mt-10">
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
