import { Navigate, Outlet } from 'react-router'
import { getUser } from '../utils/auth.js'

// Ruta protegida con dos controles:
// 1. ¿Hay usuario logueado?          → si no, al login
// 2. ¿Tiene el role que se pide?     → si no, a "no autorizado"
// Si no le pasamos "allowedRole", solo hace el primer control.
function ProtectedRoute({ allowedRole }) {
  const user = getUser()

  if (!user) {
    return <Navigate to="/login-roles/login" replace />
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/login-roles/no-autorizado" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
