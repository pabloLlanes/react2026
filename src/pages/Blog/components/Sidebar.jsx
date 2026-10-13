// <aside>: contenido relacionado pero secundario (si lo sacamos, la página se entiende igual)
function Sidebar({ posts }) {
  return (
    <aside className="space-y-6">
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="mb-2 text-lg font-semibold">Sobre el blog</h2>
        <p className="text-sm text-slate-400">
          Notas cortas sobre HTML, CSS y React para el curso.
        </p>
      </section>

      <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="mb-2 text-lg font-semibold">Todos los posts</h2>
        <ul className="space-y-1 text-sm text-slate-400">
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
