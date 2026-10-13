import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import RickAndMortyPage from './pages/RickAndMorty/RickAndMortyPage.jsx'
import ExpensesPage from './pages/Expenses/ExpensesPage.jsx'
import BlogPage from './pages/Blog/BlogPage.jsx'
import SimpleLoginLayout from './pages/SimpleLogin/SimpleLoginLayout.jsx'
import ProtectedRoute from './pages/SimpleLogin/components/ProtectedRoute.jsx'
import PublicPage from './pages/SimpleLogin/pages/PublicPage.jsx'
import LoginPage from './pages/SimpleLogin/pages/LoginPage.jsx'
import PrivatePage from './pages/SimpleLogin/pages/PrivatePage.jsx'
import RoleLoginRouter from './pages/RoleLogin/AppRouter.jsx'
import UserProfileApp from './pages/UserProfile/UserProfileApp.jsx'
import PreferencesPage from './pages/Preferences/PreferencesPage.jsx'
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/rick-and-morty" element={<RickAndMortyPage />} />
        <Route path="/gastos" element={<ExpensesPage />} />

        {/* Panel privado con login: las rutas se declaran acá mismo */}
        <Route path="/login-simple" element={<SimpleLoginLayout />}>
          <Route index element={<PublicPage />} />
          <Route path="login" element={<LoginPage />} />

          {/* Todo lo que esté adentro de ProtectedRoute requiere login */}
          <Route element={<ProtectedRoute />}>
            <Route path="panel" element={<PrivatePage />} />
          </Route>
        </Route>

        {/* Panel de usuarios y administrador: el "/*" deja que su AppRouter maneje el resto de la URL */}
        <Route path="/login-roles/*" element={<RoleLoginRouter />} />

        {/* Perfil de usuario: el "/*" deja que UserProfileApp maneje sus propias rutas */}
        <Route path="/perfil-usuario/*" element={<UserProfileApp />} />
        <Route path="/preferencias" element={<PreferencesPage />} />

        {/* "*" coincide con cualquier URL: va al final para atrapar las que no existen */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Fuera del Layout: el blog tiene su propio header, main y footer */}
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  )
}

export default App
