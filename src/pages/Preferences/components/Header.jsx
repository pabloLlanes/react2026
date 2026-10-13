import UserGreeting from './UserGreeting.jsx'
import ThemeButton from './ThemeButton.jsx'

// Header NO recibe props: sus hijos leen lo que necesitan del contexto
function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-slate-800 p-4">
      <UserGreeting />
      <ThemeButton />
    </header>
  )
}

export default Header
