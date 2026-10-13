import { useContext } from 'react'
import { PreferencesContext } from '../PreferencesContext.js'

function PreviewCard() {
  // 3️⃣ USAR el contexto: esta tarjeta usa los dos valores
  const { userName, theme } = useContext(PreferencesContext)

  const cardColors = theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'

  return (
    <article className={`rounded-xl border border-slate-800 p-5 transition ${cardColors}`}>
      <h2 className="mb-2 text-xl font-semibold">Vista previa</h2>
      <p>
        Esta tarjeta es de <strong>{userName}</strong> y usa el tema <strong>{theme}</strong>.
      </p>
    </article>
  )
}

export default PreviewCard
