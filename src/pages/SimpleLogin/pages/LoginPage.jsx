import { useState } from 'react'
import { useNavigate } from 'react-router'

// Usuario de prueba (en un proyecto real esto lo valida el backend)
const VALID_EMAIL = 'admin@mail.com'
const VALID_PASSWORD = '1234'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      alert('Email o contraseña incorrectos')
      return
    }

    localStorage.setItem('isLoggedIn', 'true')
    // Después de loguearse lo llevamos a la ruta protegida
    navigate('/login-simple/panel')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-sm space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
    >
      <h1 className="text-2xl font-bold">Iniciar sesión</h1>
      <p className="text-sm text-slate-400">Usá admin@mail.com / 1234</p>

      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Contraseña"
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500"
      >
        Ingresar
      </button>
    </form>
  )
}

export default LoginPage
