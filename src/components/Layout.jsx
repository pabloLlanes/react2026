import { Link, Outlet } from 'react-router'

// Layout compartido: header fijo + la página activa en <Outlet />
function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <nav className="mx-auto max-w-6xl px-4 py-4">
          <Link to="/" className="text-lg font-bold hover:text-emerald-400">
            ⚛️ Proyectos React
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
