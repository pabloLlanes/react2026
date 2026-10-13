import BlogHeader from './components/BlogHeader.jsx'
import PostCard from './components/PostCard.jsx'
import Sidebar from './components/Sidebar.jsx'
import BlogFooter from './components/BlogFooter.jsx'

const posts = [
  {
    id: 1,
    title: '¿Qué es el HTML semántico?',
    date: '2026-10-01',
    excerpt: 'Usar la etiqueta que describe el contenido, no solo la que se ve bien.',
  },
  {
    id: 2,
    title: 'header, main y footer',
    date: '2026-10-03',
    excerpt: 'Las tres partes básicas de cualquier página y cuándo usar cada una.',
  },
  {
    id: 3,
    title: 'article vs section',
    date: '2026-10-05',
    excerpt: 'article es contenido independiente; section agrupa contenido relacionado.',
  },
]

// Esta página NO usa el Layout general: arma su propia estructura semántica
//
// <header>   → encabezado del sitio (logo + <nav>)
// <main>     → el contenido principal (hay uno solo por página)
//   <section>  → listado de posts
//   <aside>    → contenido secundario (barra lateral)
// <footer>   → pie del sitio
function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <BlogHeader />

      <main className="mx-auto grid w-full max-w-6xl flex-1 gap-8 px-4 py-8 lg:grid-cols-3">
        <section className="space-y-6 lg:col-span-2">
          <h1 className="text-3xl font-bold">Últimos posts</h1>

          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>

        <Sidebar posts={posts} />
      </main>

      <BlogFooter />
    </div>
  )
}

export default BlogPage
