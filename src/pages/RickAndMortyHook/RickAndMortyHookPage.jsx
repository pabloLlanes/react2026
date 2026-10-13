import { useState } from 'react'
import useFetch from './hooks/useFetch.js'
import CharacterCard from './components/CharacterCard.jsx'
import Pagination from './components/Pagination.jsx'

const API_URL = 'https://rickandmortyapi.com/api/character'

// Mismo proyecto que "Personajes de Rick and Morty", pero todo el
// useEffect + fetch + estados de carga y error se mudó a useFetch.
// Compará los dos archivos: este componente solo se ocupa de mostrar.
function RickAndMortyHookPage() {
  const [page, setPage] = useState(1)

  // Cuando cambia "page", cambia la URL y useFetch vuelve a pedir los datos
  const { data, isLoading, error } = useFetch(`${API_URL}?page=${page}`)

  // La API responde: { info: { count, pages, next, prev }, results: [...] }
  // Mientras carga la primera vez, "data" es null: por eso el "?."
  const characters = data?.results ?? []
  const totalPages = data?.info.pages ?? 0

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Rick and Morty con custom hook</h1>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />

      {isLoading && <p className="py-10 text-center text-slate-400">Cargando...</p>}

      {error && <p className="py-10 text-center text-red-400">{error}</p>}

      {!isLoading && !error && (
        <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  )
}

export default RickAndMortyHookPage
