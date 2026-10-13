import { useEffect, useState } from 'react'
import CharacterCard from './components/CharacterCard.jsx'
import Pagination from './components/Pagination.jsx'

const API_URL = 'https://rickandmortyapi.com/api/character'

function RickAndMortyPage() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Se ejecuta al montar y cada vez que cambia "page"
  useEffect(() => {
    // useEffect no puede ser async: declaramos la función adentro y la llamamos
    const loadCharacters = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // La API responde: { info: { count, pages, next, prev }, results: [...] }
        const response = await fetch(`${API_URL}?page=${page}`)

        // fetch NO lanza error con 404 o 500: hay que revisar response.ok a mano
        if (!response.ok) {
          throw new Error('No se pudieron cargar los personajes')
        }

        const data = await response.json()
        setCharacters(data.results)
        setTotalPages(data.info.pages)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }

    loadCharacters()
  }, [page])

  return (
    <section>
      <h1 className="mb-6 text-3xl font-bold">Personajes de Rick and Morty</h1>

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

export default RickAndMortyPage
