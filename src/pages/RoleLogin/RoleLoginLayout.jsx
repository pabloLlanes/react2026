import { Outlet } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Layout del proyecto: Navbar arriba, la página activa en <Outlet /> y Footer abajo
function RoleLoginLayout() {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  )
}

export default RoleLoginLayout
