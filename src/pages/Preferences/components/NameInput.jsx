import { useContext } from 'react'
import { PreferencesContext } from '../PreferencesContext.js'

function NameInput() {
  // 3️⃣ USAR el contexto: leemos el nombre y la función para cambiarlo
  const { userName, setUserName } = useContext(PreferencesContext)

  const handleChange = (event) => {
    setUserName(event.target.value)
  }

  return (
    <div>
      <label htmlFor="user-name" className="mb-1 block text-sm text-slate-400">
        Tu nombre
      </label>
      <input
        id="user-name"
        type="text"
        value={userName}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
      />
    </div>
  )
}

export default NameInput
