import { Link } from 'react-router'
import UserBadge from './UserBadge.jsx'

// Navbar NO usa "user": solo lo recibe para pasárselo a UserBadge
function Navbar({ user }) {
  return (
    <nav className="flex flex-wrap items-center gap-6 text-sm">
      <Link to="/perfil-usuario" className="hover:text-emerald-400">
        Inicio
      </Link>
      <Link to="/perfil-usuario/perfil" className="hover:text-emerald-400">
        Perfil
      </Link>
      <Link to="/perfil-usuario/configuracion" className="hover:text-emerald-400">
        Configuración
      </Link>

      <UserBadge user={user} />
    </nav>
  )
}

export default Navbar
