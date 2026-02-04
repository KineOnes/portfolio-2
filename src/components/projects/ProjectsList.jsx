import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </section>
  );
}
