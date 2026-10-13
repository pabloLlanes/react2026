import { Routes, Route } from 'react-router'
import RoleLoginLayout from './RoleLoginLayout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PublicPage from './pages/PublicPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import AdminPage from './pages/AdminPage.jsx'
import UnauthorizedPage from './pages/UnauthorizedPage.jsx'

// Router separado: todas las rutas del proyecto en un solo archivo.
// En App.jsx se monta con path="/login-roles/*", por eso acá los paths son relativos.
function AppRouter() {
  return (
    <Routes>
      <Route element={<RoleLoginLayout />}>
        {/* Rutas públicas */}
        <Route index element={<PublicPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="no-autorizado" element={<UnauthorizedPage />} />

        {/* Protegida por login: cualquier usuario logueado */}
        <Route element={<ProtectedRoute />}>
          <Route path="perfil" element={<ProfilePage />} />
        </Route>

        {/* Protegida por login + role: solo "admin" */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
