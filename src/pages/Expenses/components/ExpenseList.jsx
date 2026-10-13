import ExpenseItem from './ExpenseItem.jsx'

function ExpenseList({ expenses, onEdit, onDelete }) {
  if (expenses.length === 0) {
    return <p className="py-10 text-center text-slate-400">No hay gastos cargados.</p>
  }

  return (
    <ul className="space-y-3">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  )
}

export default ExpenseList
