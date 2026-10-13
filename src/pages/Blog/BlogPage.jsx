import BlogHeader from './components/BlogHeader.jsx'
import PostCard from './components/PostCard.jsx'
import Sidebar from './components/Sidebar.jsx'
import BlogFooter from './components/BlogFooter.jsx'

// Los posts viven en su propio archivo .js: así la página queda más corta
// y los datos se pueden reusar (o reemplazar por un fetch más adelante)
import { posts } from './data/posts.js'

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
