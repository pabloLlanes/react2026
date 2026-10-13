// <article>: contenido que tiene sentido por sí solo (un post, una noticia)
// <time>: una fecha que el navegador y los buscadores pueden entender
function PostCard({ post }) {
  const { title, date, excerpt } = post

  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <header className="mb-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <time dateTime={date} className="text-sm text-slate-400">
          {date}
        </time>
      </header>

      <p className="text-slate-300">{excerpt}</p>
    </article>
  )
}

export default PostCard
