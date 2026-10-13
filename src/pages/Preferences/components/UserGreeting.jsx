import { useContext } from 'react'
import { PreferencesContext } from '../PreferencesContext.js'

function UserGreeting() {
  // 3️⃣ USAR el contexto: acá solo necesitamos el nombre
  const { userName } = useContext(PreferencesContext)

  return <p className="font-semibold">👋 Hola, {userName}</p>
}

export default UserGreeting
