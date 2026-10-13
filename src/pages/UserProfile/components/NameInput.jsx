// NameInput SÍ usa las props: muestra el nombre y avisa hacia arriba cuando cambia.
// El cambio sube hasta UserProfileApp y desde ahí baja a todos los que muestran el nombre.
function NameInput({ name, onChangeName }) {
  const handleChange = (event) => {
    onChangeName(event.target.value)
  }

  return (
    <div>
      <label htmlFor="name" className="mb-1 block text-sm text-slate-400">
        Nombre
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
      />
    </div>
  )
}

export default NameInput
