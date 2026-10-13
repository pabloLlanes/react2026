// Protegida por login + role: solo la ve un usuario con role "admin"
function AdminPage() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Panel de administración 🛠️</h1>
      <p className="text-slate-400">Si ves esto, estás logueado y tu role es "admin".</p>
    </div>
  )
}

export default AdminPage
