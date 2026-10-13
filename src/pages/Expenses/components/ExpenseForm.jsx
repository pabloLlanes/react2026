import { useState } from 'react'

const emptyForm = { description: '', amount: '' }

// Formulario para crear un gasto nuevo
function ExpenseForm({ onCreate }) {
  const [form, setForm] = useState(emptyForm)

  const handleDescriptionChange = (event) => {
    setForm({ ...form, description: event.target.value })
  }

  const handleAmountChange = (event) => {
    setForm({ ...form, amount: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (form.description === '' || Number(form.amount) <= 0) {
      alert('Completá la descripción y un monto mayor a 0')
      return
    }

    onCreate({ ...form, amount: Number(form.amount) })
    setForm(emptyForm)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
    >
      <h2 className="text-xl font-semibold">Nuevo gasto</h2>

      <div>
        <label htmlFor="description" className="mb-1 block text-sm text-slate-400">
          Descripción
        </label>
        <input
          id="description"
          type="text"
          value={form.description}
          onChange={handleDescriptionChange}
          placeholder="Ej: Supermercado"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="amount" className="mb-1 block text-sm text-slate-400">
          Monto
        </label>
        <input
          id="amount"
          type="number"
          value={form.amount}
          onChange={handleAmountChange}
          placeholder="Ej: 15000"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500"
      >
        Agregar
      </button>
    </form>
  )
}

export default ExpenseForm
