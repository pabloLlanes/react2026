import { Link } from 'react-router'

// <header>: encabezado del sitio
// <nav>: grupo de links de navegación principal
function BlogHeader() {
  return (
    <header className="border-b border-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <p className="text-lg font-bold">📝 Mi Blog</p>

        <nav>
          <ul className="flex gap-6 text-sm">
            <li>
              <Link to="/blog" className="hover:text-emerald-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-emerald-400">
                ← Volver a proyectos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default BlogHeader
