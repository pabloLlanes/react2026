import { useState } from 'react'

// Modal para editar un gasto. Solo se dibuja cuando hay un gasto para editar,
// así que el formulario arranca directamente con sus datos
function EditExpenseModal({ expense, onSave, onClose }) {
  const [form, setForm] = useState(expense)

  const handleDescriptionChange = (event) => {
    setForm({ ...form, description: event.target.value })
  }

  const handleAmountChange = (event) => {
    setForm({ ...form, amount: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (form.description.trim() === '' || Number(form.amount) <= 0) {
      alert('Completá la descripción y un monto mayor a 0')
      return
    }

    onSave({ ...form, amount: Number(form.amount) })
  }

  return (
    // Fondo oscuro que tapa toda la pantalla
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
      >
        <h2 className="text-xl font-semibold">Editar gasto</h2>

        <div>
          <label htmlFor="edit-description" className="mb-1 block text-sm text-slate-400">
            Descripción
          </label>
          <input
            id="edit-description"
            type="text"
            value={form.description}
            onChange={handleDescriptionChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="edit-amount" className="mb-1 block text-sm text-slate-400">
            Monto
          </label>
          <input
            id="edit-amount"
            type="number"
            value={form.amount}
            onChange={handleAmountChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500"
          >
            Guardar cambios
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditExpenseModal
