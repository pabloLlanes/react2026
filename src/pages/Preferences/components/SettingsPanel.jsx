import NameInput from './NameInput.jsx'

// SettingsPanel NO recibe props: NameInput toma el nombre del contexto
function SettingsPanel() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-xl font-semibold">Configuración</h2>
      <NameInput />
    </div>
  )
}

export default SettingsPanel
