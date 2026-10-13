import NameInput from './NameInput.jsx'

// SettingsForm NO usa ni "user" ni "onChangeName": solo los pasa a NameInput
function SettingsForm({ user, onChangeName }) {
  return (
    <div className="max-w-sm rounded-xl border border-slate-800 bg-slate-900 p-5">
      <NameInput name={user.name} onChangeName={onChangeName} />
    </div>
  )
}

export default SettingsForm
