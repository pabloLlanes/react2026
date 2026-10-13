import Welcome from '../components/Welcome.jsx'

// HomePage NO usa "user": solo lo pasa a Welcome
function HomePage({ user }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Perfil de usuario editable</h1>
      <Welcome user={user} />
      <p className="text-slate-400">
        Andá a Configuración, cambiá el nombre y mirá cómo se actualiza acá, en el perfil y en el
        menú de arriba.
      </p>
    </div>
  )
}

export default HomePage
