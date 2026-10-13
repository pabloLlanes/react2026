import { getUser } from '../utils/auth.js'

// Protegida por login: la ve cualquier usuario logueado
function ProfilePage() {
  const { email, token, role } = getUser()

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Mi perfil 👤</h1>
      <p className="text-slate-400">Estos son los datos guardados en localStorage:</p>

      <ul className="space-y-1 rounded-xl border border-slate-800 bg-slate-900 p-5 text-sm">
        <li>Email: {email}</li>
        <li>Token: {token}</li>
        <li>Role: {role}</li>
      </ul>
    </div>
  )
}

export default ProfilePage
