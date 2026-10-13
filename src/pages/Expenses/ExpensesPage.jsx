import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm.jsx'
import ExpenseList from './components/ExpenseList.jsx'
import ExpenseSummary from './components/ExpenseSummary.jsx'
import EditExpenseModal from './components/EditExpenseModal.jsx'

// Gastos de ejemplo para que la lista no arranque vacía
const initialExpenses = [
  { id: 1, description: 'Supermercado', amount: 25000 },
  { id: 2, description: 'SUBE', amount: 5000 },
  { id: 3, description: 'Internet', amount: 18000 },
]

function ExpensesPage() {
  const [expenses, setExpenses] = useState(initialExpenses)
  // Gasto que se está editando (null = el modal está cerrado)
  const [editingExpense, setEditingExpense] = useState(null)

  // CREATE: agrega un gasto nuevo con un id único
  const handleCreate = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }])
  }

  // UPDATE: reemplaza el gasto que tiene el mismo id
  const handleUpdate = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) => (expense.id === updatedExpense.id ? updatedExpense : expense))
    )
    setEditingExpense(null)
  }

  // DELETE: se queda con todos los gastos menos el que tiene ese id
  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const handleCloseModal = () => {
    setEditingExpense(null)
  }

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Control de gastos</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          <ExpenseForm onCreate={handleCreate} />
          <ExpenseSummary expenses={expenses} />
        </div>

        {/* READ: la lista muestra todos los gastos */}
        <div className="lg:col-span-2">
          <ExpenseList expenses={expenses} onEdit={setEditingExpense} onDelete={handleDelete} />
        </div>
      </div>

      {/* El modal solo aparece cuando hay un gasto para editar */}
      {editingExpense && (
        <EditExpenseModal
          expense={editingExpense}
          onSave={handleUpdate}
          onClose={handleCloseModal}
        />
      )}
    </section>
  )
}

export default ExpensesPage
