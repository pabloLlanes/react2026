import { useState } from 'react'
import { PreferencesContext } from './PreferencesContext.js'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

// El contexto comparte 2 valores: "userName" y "theme" (más las funciones para cambiarlos).
// Ningún componente recibe props: cada uno toma del contexto solo lo que necesita.
//
// PreferencesPage (guarda userName y theme)
// ├── Header  → UserGreeting                  ← usa userName
// │           → ThemeButton                   ← usa theme (y lo cambia)
// ├── Content → SettingsPanel → NameInput     ← usa userName (y lo cambia)
// │           → PreviewCard                   ← usa userName y theme
// └── Footer  → FooterInfo                    ← usa userName y theme
function PreferencesPage() {
  const [userName, setUserName] = useState('Ana')
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    // 2️⃣ PROVEER los valores: todo lo que esté adentro los puede leer
    //    (antes de React 19 se escribía <PreferencesContext.Provider value={...}>)
    <PreferencesContext value={{ userName, setUserName, theme, toggleTheme }}>
      <section className="space-y-6">
        <h1 className="text-3xl font-bold">Preferencias: nombre y tema</h1>
        <Header />
        <Content />
        <Footer />
      </section>
    </PreferencesContext>
  )
}

export default PreferencesPage
