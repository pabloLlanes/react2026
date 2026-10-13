import { useContext } from 'react'
import { PreferencesContext } from '../PreferencesContext.js'

function ThemeButton() {
  // 3️⃣ USAR el contexto: acá solo necesitamos el tema y la función para cambiarlo
  const { theme, toggleTheme } = useContext(PreferencesContext)

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500"
    >
      {theme === 'dark' ? '☀️ Pasar a claro' : '🌙 Pasar a oscuro'}
    </button>
  )
}

export default ThemeButton
