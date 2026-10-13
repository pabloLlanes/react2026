function ExpenseSummary({ expenses }) {
  // El total no se guarda en un estado: se calcula a partir de los gastos
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">Total gastado</p>
      <p className="text-3xl font-bold text-emerald-400">${total.toLocaleString('es-AR')}</p>
      <p className="text-sm text-slate-400">{expenses.length} gastos</p>
    </div>
  )
}

export default ExpenseSummary
