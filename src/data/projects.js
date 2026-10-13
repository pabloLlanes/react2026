// Cada objeto es una tarjeta de la pantalla inicial.
// Para sumar un proyecto: agregar su objeto acá y su <Route /> en App.jsx
export const projects = [
  {
    id: 1,
    title: 'Personajes de Rick and Morty',
    description: 'Listado paginado de personajes traídos de una API pública.',
    path: '/rick-and-morty',
    tags: ['fetch', 'async/await', 'useEffect', 'paginado'],
  },
  {
    id: 2,
    title: 'Control de gastos',
    description: 'Cargá, editá y borrá tus gastos y mirá el total gastado.',
    path: '/gastos',
    tags: ['CRUD', 'useState', 'formularios', 'props'],
  },
  {
    id: 3,
    title: 'Blog de notas',
    description: 'Página de blog con posts y barra lateral, armada con HTML semántico.',
    path: '/blog',
    tags: ['HTML semántico', 'layout', 'componentes'],
  },
  {
    id: 4,
    title: 'Panel privado con login',
    description: 'Iniciá sesión para entrar a un panel que sin login no se puede ver.',
    path: '/login-simple',
    tags: ['react-router', 'rutas protegidas', 'localStorage'],
  },
  {
    id: 5,
    title: 'Panel de usuarios y administrador',
    description: 'Usuarios con perfil propio y una sección que solo ve el administrador.',
    path: '/login-roles',
    tags: ['react-router', 'roles', 'localStorage', 'JSON'],
  },
  {
    id: 6,
    title: 'Perfil de usuario editable',
    description: 'Cambiá tu nombre en Configuración y se actualiza en todas las páginas.',
    path: '/perfil-usuario',
    tags: ['props', 'useState', 'estado compartido'],
  },
  {
    id: 7,
    title: 'Preferencias: nombre y tema',
    description: 'Cambiá tu nombre y el tema, y se actualizan en toda la página sin pasar props.',
    path: '/preferencias',
    tags: ['Context', 'useContext', 'createContext'],
  },
]
