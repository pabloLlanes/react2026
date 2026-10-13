import SettingsForm from '../components/SettingsForm.jsx'

// SettingsPage NO usa las props: solo las pasa a SettingsForm
function SettingsPage({ user, onChangeName }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Configuración</h1>
      <SettingsForm user={user} onChangeName={onChangeName} />
    </div>
  )
}

export default SettingsPage
