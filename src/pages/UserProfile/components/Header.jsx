import Navbar from './Navbar.jsx'

// Header NO usa "user": solo lo recibe para pasárselo a Navbar
function Header({ user }) {
  return (
    <header className="mb-8 border-b border-slate-800 pb-4">
      <Navbar user={user} />
    </header>
  )
}

export default Header
