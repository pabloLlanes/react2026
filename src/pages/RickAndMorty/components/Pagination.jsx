// Componente "tonto": no sabe nada de la API, solo recibe la página
// actual, el total y una función para avisar que hay que cambiar de página
function Pagination({ page, totalPages, onPageChange }) {
  const isFirstPage = page === 1
  const isLastPage = page === totalPages

  const handlePreviousPage = () => {
    onPageChange(page - 1)
  }

  const handleNextPage = () => {
    onPageChange(page + 1)
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={handlePreviousPage}
        disabled={isFirstPage}
        className="rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Anterior
      </button>

      <span className="text-sm text-slate-400">
        Página {page} de {totalPages || '...'}
      </span>

      <button
        onClick={handleNextPage}
        disabled={isLastPage || totalPages === 0}
        className="rounded-lg bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Siguiente →
      </button>
    </div>
  )
}

export default Pagination
