// Archivo .js (no .jsx): acá solo hay datos, nada de JSX.
// "export" deja usar este array desde cualquier otro archivo con:
//   import { posts } from './data/posts.js'
export const posts = [
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
  {
    id: 4,
    title: 'nav: el menú de navegación',
    date: '2026-10-07',
    excerpt: 'nav agrupa los links principales del sitio; no hace falta para cualquier link suelto.',
  },
  {
    id: 5,
    title: 'aside: contenido secundario',
    date: '2026-10-09',
    excerpt: 'Barras laterales, publicidades o links relacionados: lo que acompaña pero no es lo principal.',
  },
  {
    id: 6,
    title: 'Un solo h1 por página',
    date: '2026-10-11',
    excerpt: 'Los títulos van en orden (h1, h2, h3...) como el índice de un libro, sin saltear niveles.',
  },
  {
    id: 7,
    title: 'button vs a',
    date: '2026-10-13',
    excerpt: 'Si lleva a otra página es un <a>; si hace una acción en la misma página es un <button>.',
  },
]
