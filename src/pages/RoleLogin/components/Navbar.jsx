import { Link, useNavigate } from 'react-router'
import { getUser, logout } from '../utils/auth.js'

// Menú del proyecto: muestra links y, según haya usuario o no, "Cerrar sesión" o "Iniciar sesión"
function Navbar() {
  const navigate = useNavigate()
  const user = getUser()

  const handleLogout = () => {
    logout()
    navigate('/login-roles/login')
  }

  return (
    <nav className="mb-8 flex flex-wrap items-center gap-6 border-b border-slate-800 pb-4 text-sm">
      <Link to="/login-roles" className="hover:text-emerald-400">
        Inicio (pública)
      </Link>
      <Link to="/login-roles/perfil" className="hover:text-emerald-400">
        Perfil (logueado)
      </Link>
      <Link to="/login-roles/admin" className="hover:text-emerald-400">
        Admin (logueado + admin)
      </Link>

      {user ? (
        <div className="ml-auto flex items-center gap-4">
          <span className="text-slate-400">
            {user.email} ({user.role})
          </span>
          <button onClick={handleLogout} className="text-red-400 hover:underline">
            Cerrar sesión
          </button>
        </div>
      ) : (
        <Link to="/login-roles/login" className="ml-auto text-emerald-400 hover:underline">
          Iniciar sesión
        </Link>
      )}
    </nav>
  )
}

export default Navbar
