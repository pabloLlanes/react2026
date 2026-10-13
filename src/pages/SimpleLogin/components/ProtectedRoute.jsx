import { Navigate, Outlet } from 'react-router'

// Ruta protegida: es una ruta "sin path" que envuelve a otras rutas.
// - Si NO está logueado → lo mandamos al login con <Navigate />
// - Si está logueado    → <Outlet /> muestra la ruta hija que se pidió
function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (!isLoggedIn) {
    // "replace" reemplaza la entrada del historial: con "Atrás" no vuelve a la ruta protegida
    return <Navigate to="/login-simple/login" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
