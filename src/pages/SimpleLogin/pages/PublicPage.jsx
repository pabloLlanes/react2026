// Página pública: la puede ver cualquiera, esté logueado o no
function PublicPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Panel privado con login</h1>
      <p className="text-slate-400">
        Esta página es pública. El estado del login se guarda en localStorage como{' '}
        <code className="text-emerald-400">isLoggedIn</code> (true o false).
      </p>

      <h2 className="text-xl font-semibold">Probalo</h2>
      <ol className="list-inside list-decimal space-y-1 text-slate-300">
        <li>Sin iniciar sesión, entrá a "Panel": te manda al login.</li>
        <li>Iniciá sesión con admin@mail.com / 1234.</li>
        <li>Ahora "Panel" sí se ve.</li>
        <li>Abrí DevTools → Application → Local Storage y mirá el valor de isLoggedIn.</li>
      </ol>
    </div>
  )
}

export default PublicPage
