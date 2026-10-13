import { Link } from 'react-router'

// Se muestra cuando la URL no coincide con ninguna ruta (path="*" en App.jsx)
function NotFoundPage() {
  return (
    <section className="py-20 text-center">
      <p className="mb-2 text-6xl font-bold text-emerald-400">404</p>
      <h1 className="mb-4 text-2xl font-semibold">Página no encontrada</h1>
      <p className="mb-6 text-slate-400">La dirección que buscás no existe.</p>
      <Link
        to="/"
        className="rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500"
      >
        Volver a proyectos
      </Link>
    </section>
  )
}

export default NotFoundPage
