import { Link } from 'react-router'

// A dónde mandamos a un usuario logueado que no tiene el role necesario
function UnauthorizedPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-red-400">No autorizado ⛔</h1>
      <p className="text-slate-400">Estás logueado, pero tu role no tiene acceso a esa página.</p>
      <Link to="/login-roles" className="text-emerald-400 hover:underline">
        Volver al inicio
      </Link>
    </div>
  )
}

export default UnauthorizedPage
