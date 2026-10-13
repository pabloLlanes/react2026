// Página pública: la puede ver cualquiera
function PublicPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Panel de usuarios y administrador</h1>
      <p className="text-slate-400">
        El usuario se guarda en localStorage como un objeto con{' '}
        <code className="text-emerald-400">email</code>,{' '}
        <code className="text-emerald-400">token</code> y{' '}
        <code className="text-emerald-400">role</code>.
      </p>

      <h2 className="text-xl font-semibold">Usuarios de prueba</h2>
      <ul className="list-inside list-disc text-slate-300">
        <li>admin@mail.com / 1234 → role "admin"</li>
        <li>user@mail.com / 1234 → role "user"</li>
      </ul>

      <h2 className="text-xl font-semibold">Probalo</h2>
      <ol className="list-inside list-decimal space-y-1 text-slate-300">
        <li>Sin sesión, entrá a "Perfil" o "Admin": te manda al login.</li>
        <li>Entrá como user: "Perfil" se ve, "Admin" te manda a "no autorizado".</li>
        <li>Cerrá sesión y entrá como admin: se ven las dos.</li>
        <li>Mirá la key "user" en DevTools → Application → Local Storage.</li>
      </ol>
    </div>
  )
}

export default PublicPage
