import { useContext } from 'react'
import { PreferencesContext } from '../PreferencesContext.js'

function FooterInfo() {
  // 3️⃣ USAR el contexto: bien lejos de donde se creó el estado, sin props
  const { userName, theme } = useContext(PreferencesContext)

  return (
    <p>
      Sesión de {userName} · Tema {theme === 'dark' ? '🌙 oscuro' : '☀️ claro'}
    </p>
  )
}

export default FooterInfo
