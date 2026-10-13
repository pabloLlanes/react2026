# ⚛️ Proyectos React

Colección de proyectos chicos para aprender React paso a paso. Cada proyecto se enfoca en **un tema** y está comentado para que lo puedas leer como una guía.

> 💡 **Consejo:** no copies el código. Leé los comentarios, abrí el proyecto en el navegador y después intentá hacer los desafíos 🎯 de cada uno.

---

## 🚀 Cómo correrlo

```bash
npm install     # instala las dependencias (solo la primera vez)
npm run dev     # levanta el proyecto en http://localhost:5173
```

Otros comandos:

| Comando | Qué hace |
|---|---|
| `npm run build` | Genera la versión final en la carpeta `dist/` |
| `npm run preview` | Muestra cómo queda esa versión final |

## 🧰 Tecnologías

- ⚛️ **React 19**: la librería para armar la interfaz con componentes
- ⚡ **Vite**: levanta el proyecto y lo recarga al guardar
- 🧭 **React Router 7**: las rutas (en modo declarativo: `<Routes>` y `<Route>`)
- 🎨 **Tailwind CSS 4**: los estilos, con clases directo en el JSX

## 🗂️ Estructura

```
src/
├── App.jsx              ← todas las rutas de la app
├── main.jsx             ← punto de entrada (BrowserRouter)
├── components/
│   └── Layout.jsx       ← header general + <Outlet />
├── data/
│   └── projects.js      ← las tarjetas de la pantalla inicial
└── pages/
    ├── Home/            ← listado de proyectos
    ├── RickAndMorty/
    ├── Expenses/
    ├── Blog/
    ├── SimpleLogin/
    ├── RoleLogin/
    ├── UserProfile/
    ├── Preferences/
    └── NotFound/        ← página 404
```

> ➕ **Para sumar un proyecto nuevo:** agregá su objeto en `data/projects.js` y su `<Route />` en `App.jsx`.

### 🗺️ Orden sugerido

| # | Proyecto | Tema principal |
|---|---|---|
| 1 | 📝 Blog de notas | HTML semántico y componentes |
| 2 | 💸 Control de gastos | `useState`, formularios y CRUD |
| 3 | 🛸 Personajes de Rick and Morty | `fetch` y `useEffect` |
| 4 | 🔐 Panel privado con login | Rutas protegidas |
| 5 | 🛡️ Panel de usuarios y administrador | Rutas por role y router separado |
| 6 | 👤 Perfil de usuario editable | Pasar props por muchos niveles |
| 7 | 🎛️ Preferencias: nombre y tema | Context API |

---

## 📝 Blog de notas

**Ruta:** `/blog` · **Carpeta:** `src/pages/Blog/`

Una página de blog armada con las etiquetas de HTML que **describen su contenido**, no solo `<div>`.

### 📚 Qué vas a aprender

| Etiqueta | Para qué sirve | Dónde está |
|---|---|---|
| `<header>` | Encabezado del sitio o de un bloque | `BlogHeader.jsx` y adentro de cada post |
| `<nav>` | Grupo de links de navegación | `BlogHeader.jsx` |
| `<main>` | Contenido principal (**uno solo** por página) | `BlogPage.jsx` |
| `<section>` | Agrupa contenido relacionado, con un título | Listado de posts y la barra lateral |
| `<article>` | Contenido que se entiende solo (un post, una noticia) | `PostCard.jsx` |
| `<aside>` | Contenido secundario: si lo sacás, la página se entiende igual | `Sidebar.jsx` |
| `<footer>` | Pie del sitio | `BlogFooter.jsx` |
| `<time>` | Una fecha que el navegador puede entender | `PostCard.jsx` |

### 🔍 Para observar

- 🧩 Esta página está **fuera del Layout general** (mirá `App.jsx`). ¿Por qué? Porque el Layout ya tiene un `<main>`, y una página no puede tener dos.
- 🛠️ Abrí DevTools → Elements y recorré el árbol: se lee como un índice.

### 🎯 Desafíos

1. Agregá un cuarto post al array `posts`.
2. Sumá un campo `author` a cada post y mostralo en el `<footer>` de cada `<article>`.
3. Agregá una `<section>` nueva al `<aside>` con tus redes sociales.

---

## 💸 Control de gastos

**Ruta:** `/gastos` · **Carpeta:** `src/pages/Expenses/`

Una lista de gastos donde podés **crear, ver, editar y borrar** (CRUD).

### 📚 Qué vas a aprender

- 🧠 **`useState`** con arrays y objetos
- 📝 **Formularios controlados**: el valor del input vive en el estado
- 🔁 **CRUD sin modificar el array original**:

| Operación | Cómo se hace | Función |
|---|---|---|
| ➕ Create | `[...expenses, nuevo]` | `handleCreate` |
| 👀 Read | `expenses.map(...)` | `ExpenseList` |
| ✏️ Update | `expenses.map(...)` reemplazando por id | `handleUpdate` |
| 🗑️ Delete | `expenses.filter(...)` | `handleDelete` |

- ⬆️ **Levantar el estado**: todos los gastos viven en `ExpensesPage` y los hijos avisan con funciones (`onCreate`, `onEdit`, `onDelete`)
- 🪟 **Modal**: se muestra con `{editingExpense && <EditExpenseModal />}`
- 🧮 **Valores calculados**: el total no es un estado, se calcula con `reduce`

### 🧩 Componentes

```
ExpensesPage (estado: expenses, editingExpense)
├── ExpenseForm        ← crea
├── ExpenseSummary     ← total
├── ExpenseList
│   └── ExpenseItem    ← botones Editar / Borrar
└── EditExpenseModal   ← edita (solo si hay un gasto seleccionado)
```

### 🔍 Para observar

- ⚠️ Al recargar la página, los gastos vuelven a los de ejemplo: el estado vive en memoria.
- 🤔 ¿Por qué el modal arranca con los datos correctos sin un `useEffect`? Porque **se crea de cero** cada vez que se abre.

### 🎯 Desafíos

1. Pedí confirmación antes de borrar (`confirm('¿Seguro?')`).
2. Mostrá el gasto más caro en `ExpenseSummary`.
3. Guardá los gastos en `localStorage` para que no se pierdan al recargar.

---

## 🛸 Personajes de Rick and Morty

**Ruta:** `/rick-and-morty` · **Carpeta:** `src/pages/RickAndMorty/`

Un listado de personajes que se pide a una API pública, con paginado.

### 📚 Qué vas a aprender

- 🌐 **`fetch` con `async/await`**
- ⚡ **`useEffect`**: pedir datos al cargar la página y cada vez que cambia `page`
- ⏳ **Los tres estados de un pedido**: cargando, error y datos
- ❗ **`response.ok`**: `fetch` **no** lanza error con un 404 o un 500, hay que revisarlo a mano
- 🔀 **`switch`**: color según el estado del personaje y emoji según la especie
- 📄 **Componente "tonto"**: `Pagination` no sabe nada de la API, solo recibe props

### 🔍 Para observar

- 🛠️ Abrí DevTools → Network y cambiá de página: vas a ver cada pedido a la API.
- 📡 En Network elegí **Offline** y cambiá de página: aparece el mensaje de error.
- 🧪 La API responde con este formato:

```js
{
  info: { count, pages, next, prev },
  results: [ /* personajes */ ]
}
```

### 🎯 Desafíos

1. Agregá emojis para las especies que caen en el `default` (`Humanoid`, `Cronenberg`...).
2. Mostrá el género del personaje (`character.gender`) en la tarjeta.
3. Agregá un botón "Reintentar" cuando hay un error.

---

## 🔐 Panel privado con login

**Ruta:** `/login-simple` · **Carpeta:** `src/pages/SimpleLogin/`

Un login que guarda en `localStorage` si estás logueado (`isLoggedIn`: `'true'` o `'false'`) y una ruta que solo podés ver con sesión iniciada.

### 📚 Qué vas a aprender

- 🧭 **Rutas anidadas** con un layout y `<Outlet />`
- 🚧 **Ruta protegida**: un componente que decide si muestra la página o te redirige

```jsx
function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (!isLoggedIn) {
    return <Navigate to="/login-simple/login" replace />
  }

  return <Outlet />
}
```

- 🔒 Se usa **envolviendo** las rutas que querés proteger:

```jsx
<Route element={<ProtectedRoute />}>
  <Route path="panel" element={<PrivatePage />} />
</Route>
```

- 💾 **`localStorage` solo guarda texto**: por eso se compara contra `'true'` (string) y no contra `true`
- ↪️ **`useNavigate`**: para ir a otra página después de loguearse

### 🧪 Probalo

| Usuario | Contraseña |
|---|---|
| `admin@mail.com` | `1234` |

1. Sin iniciar sesión, entrá a **Panel** → te manda al login 🚫
2. Iniciá sesión → ahora **Panel** se ve ✅
3. Mirá `isLoggedIn` en DevTools → Application → Local Storage 👀

### 🎯 Desafíos

1. Agregá una segunda página protegida (`/login-simple/configuracion`).
2. Si ya estás logueado y entrás a `/login`, mandate directo al panel.
3. Cambiá `isLoggedIn` a mano en DevTools: ¿qué pasa? 🤔 (pista: por eso la seguridad real la hace el backend)

---

## 🛡️ Panel de usuarios y administrador

**Ruta:** `/login-roles` · **Carpeta:** `src/pages/RoleLogin/`

La versión más completa del login: el usuario se guarda como objeto y algunas páginas solo las ve un **admin**.

### 📚 Qué vas a aprender

- 🗺️ **Router separado**: todas las rutas del proyecto en `AppRouter.jsx`, que se monta en `App.jsx` con `path="/login-roles/*"`
- 📦 **Guardar objetos en `localStorage`**:

```js
localStorage.setItem('user', JSON.stringify({ email, token, role }))  // objeto → texto
const user = JSON.parse(localStorage.getItem('user'))                 // texto → objeto
```

- 🧰 **Funciones de ayuda** en `utils/auth.js` (`login`, `getUser`, `logout`) para no repetir código
- 🛡️ **Dos niveles de protección** con el mismo componente:

| Ruta | Protección | Cómo |
|---|---|---|
| `/perfil` | Estar logueado | `<ProtectedRoute />` |
| `/admin` | Estar logueado **y** ser admin | `<ProtectedRoute allowedRole="admin" />` |

- ⛔ **Página "no autorizado"**: para el que está logueado pero no tiene permiso
- 🧱 **Layout con Navbar y Footer**: lo fijo arriba y abajo, y la página que cambia en el `<Outlet />`

### 🧪 Probalo

| Usuario | Contraseña | Role |
|---|---|---|
| `admin@mail.com` | `1234` | 👑 admin |
| `user@mail.com` | `1234` | 🙋 user |

1. Sin sesión, entrá a **Perfil** o **Admin** → te manda al login 🚫
2. Entrá como **user** → Perfil ✅, Admin te manda a "no autorizado" ⛔
3. Entrá como **admin** → ves las dos ✅✅
4. Mirá la key `user` en DevTools → Application → Local Storage 👀

### 🎯 Desafíos

1. Ocultá el link "Admin" del menú si el usuario no es admin.
2. Agregá un tercer role (`editor`) con su propia página.
3. Cambiá `allowedRole` por `allowedRoles` (un array) para que una página la vean varios roles.

---

## 👤 Perfil de usuario editable

**Ruta:** `/perfil-usuario` · **Carpeta:** `src/pages/UserProfile/`

Un perfil donde cambiás tu nombre en Configuración y se actualiza en todas las páginas. Para lograrlo, el estado `user` tiene que llegar a componentes que están **muy abajo**, pasando por props nivel por nivel.

### 📚 Qué vas a aprender

- 🕳️ **Qué es el prop drilling**: pasar una prop por componentes que **no la usan**, solo para que llegue más abajo
- ⬆️⬇️ **Datos que bajan y avisos que suben**: `user` baja por props y `onChangeName` lleva el cambio hacia arriba
- 🔄 **Un solo estado, muchos lugares**: cambiás el nombre en Configuración y se actualiza en todos lados

### 🌳 El árbol

```
UserProfileApp (user)
├── Header → Navbar → UserBadge                     ← lo muestra
├── HomePage → Welcome → WelcomeMessage             ← lo muestra
├── ProfilePage → ProfileCard → ProfileDetails      ← lo muestra
└── SettingsPage → SettingsForm → NameInput         ← lo cambia
```

> 👀 Cada componente tiene un comentario que dice si **usa** la prop o si **solo la pasa**. Contá cuántos solo la pasan: ese es el problema.

### 🔍 Para observar

- ✍️ Andá a **Configuración** y escribí otro nombre: cambia en el menú, en el inicio y en el perfil al mismo tiempo.
- 🧭 Las páginas reciben las props directo en la ruta: `element={<HomePage user={user} />}`.

### 🎯 Desafíos

1. Agregá un campo para cambiar el email y hacé que llegue hasta `ProfileDetails`.
2. Agregá un nivel más entre `Navbar` y `UserBadge`: ¿cuántos archivos tuviste que tocar?
3. 🔮 **Próximamente:** vamos a reemplazar todo este drilling por **Context API**.

---

## 🎛️ Preferencias: nombre y tema

**Ruta:** `/preferencias` · **Carpeta:** `src/pages/Preferences/`

Cambiás tu nombre y el tema (claro u oscuro), y se actualizan en el header, en la tarjeta y en el footer al mismo tiempo. Lo importante: **ningún componente recibe props**. Los dos valores (`userName` y `theme`) viajan por un **contexto**.

### 📚 Qué vas a aprender

Context se usa en **3 pasos**:

| Paso | Qué hace | Dónde está |
|---|---|---|
| 1️⃣ Crear | `createContext()` arma la "caja" | `PreferencesContext.js` |
| 2️⃣ Proveer | `<PreferencesContext value={...}>` pone los valores en la caja | `PreferencesPage.jsx` |
| 3️⃣ Usar | `useContext(PreferencesContext)` los lee desde cualquier componente de adentro | `UserGreeting`, `ThemeButton`, `NameInput`, `PreviewCard`, `FooterInfo` |

```jsx
// 1️⃣ Crear
export const PreferencesContext = createContext()

// 2️⃣ Proveer
<PreferencesContext value={{ userName, setUserName, theme, toggleTheme }}>
  <Header />
  <Content />
  <Footer />
</PreferencesContext>

// 3️⃣ Usar: cada componente toma SOLO lo que necesita
const { userName } = useContext(PreferencesContext)
const { theme, toggleTheme } = useContext(PreferencesContext)
```

> ℹ️ En tutoriales anteriores a React 19 vas a ver `<PreferencesContext.Provider value={...}>`. Hace lo mismo.

### 🌳 El árbol

```
PreferencesPage (guarda userName y theme)
├── Header  → UserGreeting                ← usa userName
│           → ThemeButton                 ← usa theme (y lo cambia)
├── Content → SettingsPanel → NameInput   ← usa userName (y lo cambia)
│           → PreviewCard                 ← usa userName y theme
└── Footer  → FooterInfo                  ← usa userName y theme
```

> 👀 `Header`, `Content`, `SettingsPanel` y `Footer` **no reciben ninguna prop**. Cada componente que necesita un valor lo pide directo al contexto, sin importar qué tan abajo esté.

### 🔍 Para observar

- 🆚 Compará con **👤 Perfil de usuario editable**: allá cada componente del medio recibe `user` por props; acá no reciben nada.
- ✍️ Escribí otro nombre: cambia en el saludo, en la tarjeta y en el footer.
- 🧪 Sacá `<Footer />` afuera del `<PreferencesContext>`: ¿qué pasa? 🤔

### 🎯 Desafíos

1. Agregá un componente nuevo dentro de `Footer` que muestre "Modo oscuro activado 🌙" solo cuando el tema es `dark`.
2. Sumá un tercer valor al contexto (por ejemplo `language`: `'es'` o `'en'`) y usalo en `UserGreeting`.
3. 🔮 Pasá el proyecto **👤 Perfil de usuario editable** a Context: un `UserContext` con `user` y `handleChangeName`.

---

## 🚫 Página 404

**Carpeta:** `src/pages/NotFound/`

Si entrás a una URL que no existe (por ejemplo `/cualquier-cosa`), se muestra esta página. Funciona con una ruta que coincide con **cualquier** URL y va al final:

```jsx
<Route path="*" element={<NotFoundPage />} />
```

---

## 🧠 Repaso rápido

| Concepto | Proyecto donde lo ves |
|---|---|
| Componentes y props | Todos |
| `useState` | 💸 Control de gastos, 🛸 Personajes de Rick and Morty, 👤 Perfil de usuario editable, 🎛️ Preferencias: nombre y tema |
| `useEffect` | 🛸 Personajes de Rick and Morty |
| Formularios controlados | 💸 Control de gastos, 🔐 Panel privado con login, 🛡️ Panel de usuarios y administrador |
| `map` / `filter` / `reduce` | 💸 Control de gastos |
| Renderizado condicional | Todos |
| `fetch` y APIs | 🛸 Personajes de Rick and Morty |
| Rutas y `<Outlet />` | 🔐 Panel privado con login, 🛡️ Panel de usuarios y administrador |
| Rutas protegidas | 🔐 Panel privado con login, 🛡️ Panel de usuarios y administrador |
| `localStorage` | 🔐 Panel privado con login, 🛡️ Panel de usuarios y administrador |
| HTML semántico | 📝 Blog de notas |
| Pasar props por muchos niveles | 👤 Perfil de usuario editable |
| Context API (`createContext`, `useContext`) | 🎛️ Preferencias: nombre y tema |
