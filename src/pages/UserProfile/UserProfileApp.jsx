import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'

// El estado "user" vive ACÁ, arriba de todo, porque lo usan componentes de varias páginas.
// Para que llegue a los componentes de abajo hay que pasarlo por props nivel por nivel:
// eso es el "prop drilling" (perforar los componentes con props).
//
// UserProfileApp (user)
// ├── Header (user) → Navbar (user) → UserBadge (user)                 ← lo muestra
// ├── HomePage (user) → Welcome (user) → WelcomeMessage (user)          ← lo muestra
// ├── ProfilePage (user) → ProfileCard (user) → ProfileDetails (user)   ← lo muestra
// └── SettingsPage (user, onChangeName) → SettingsForm → NameInput      ← lo cambia
function UserProfileApp() {
  const [user, setUser] = useState({ name: 'Ana', email: 'ana@mail.com' })

  // La función para cambiar el nombre también baja por props hasta NameInput
  const handleChangeName = (newName) => {
    setUser({ ...user, name: newName })
  }

  return (
    <section>
      <Header user={user} />

      {/* Pasamos props a cada página directo en el "element" de la ruta */}
      <Routes>
        <Route index element={<HomePage user={user} />} />
        <Route path="perfil" element={<ProfilePage user={user} />} />
        <Route
          path="configuracion"
          element={<SettingsPage user={user} onChangeName={handleChangeName} />}
        />
      </Routes>
    </section>
  )
}

export default UserProfileApp
