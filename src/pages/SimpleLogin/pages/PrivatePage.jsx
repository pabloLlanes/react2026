// Página privada: solo se llega acá si ProtectedRoute dejó pasar
function PrivatePage() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Panel privado 🔒</h1>
      <p className="text-slate-400">Si ves esto, es porque isLoggedIn está en true.</p>
    </div>
  )
}

export default PrivatePage
