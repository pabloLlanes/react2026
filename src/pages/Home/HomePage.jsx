import { projects } from '../../data/projects.js'
import ProjectCard from './components/ProjectCard.jsx'

function HomePage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Proyectos</h1>

      {/* Cuadrícula: 1 columna en mobile, 2 en tablet, 3 en desktop */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default HomePage
