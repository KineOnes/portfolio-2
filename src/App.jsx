import ProjectsList from "./components/projects/ProjectsList";

export default function App() {
  return (
    <main className="min-h-screen bg-purple-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">
        My Projects
      </h1>

      <ProjectsList />
    </main>
  );
}
