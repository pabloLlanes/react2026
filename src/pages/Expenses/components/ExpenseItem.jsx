function ExpenseItem({ expense, onEdit, onDelete }) {
  const { id, description, amount } = expense

  const handleEdit = () => {
    onEdit(expense)
  }

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="min-w-0 truncate font-medium">{description}</p>

      <div className="flex items-center gap-3">
        <span className="font-semibold">${amount.toLocaleString('es-AR')}</span>

        <button
          onClick={handleEdit}
          className="rounded-lg border border-slate-700 px-3 py-1 text-sm hover:bg-slate-800"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="rounded-lg border border-red-400 px-3 py-1 text-sm text-red-400 hover:bg-red-400/10"
        >
          Borrar
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem
