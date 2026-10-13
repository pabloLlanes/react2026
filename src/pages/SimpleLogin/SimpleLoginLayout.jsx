import { Link, Outlet, useNavigate } from 'react-router'

// Layout del proyecto: menú arriba y la página activa en <Outlet />
function SimpleLoginLayout() {
  const navigate = useNavigate()

  // localStorage solo guarda texto: comparamos contra el string 'true'
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false')
    navigate('/login-simple/login')
  }

  return (
    <section>
      <nav className="mb-8 flex items-center gap-6 border-b border-slate-800 pb-4 text-sm">
        <Link to="/login-simple" className="hover:text-emerald-400">
          Inicio (pública)
        </Link>
        <Link to="/login-simple/panel" className="hover:text-emerald-400">
          Panel (protegida)
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="ml-auto text-red-400 hover:underline">
            Cerrar sesión
          </button>
        ) : (
          <Link to="/login-simple/login" className="ml-auto text-emerald-400 hover:underline">
            Iniciar sesión
          </Link>
        )}
      </nav>

      <Outlet />
    </section>
  )
}

export default SimpleLoginLayout
