import { Link } from 'react-router'

function ProjectCard({ project }) {
  const { title, description, path, tags } = project

  return (
    <Link
      to={path}
      className="block rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-emerald-500"
    >
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-4 text-sm text-slate-400">{description}</p>

      <ul className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400"
          >
            {tag}
          </li>
        ))}
      </ul>
    </Link>
  )
}

export default ProjectCard
