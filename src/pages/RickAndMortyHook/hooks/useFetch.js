import { useEffect, useState } from 'react'

// Un CUSTOM HOOK es una función común que:
//   1. empieza con "use" (así React sabe que adentro usa hooks)
//   2. usa otros hooks (useState, useEffect...)
//   3. devuelve lo que el componente necesita
// Es .js y no .jsx porque no tiene JSX: es solo lógica.
//
// Este hook no sabe nada de Rick and Morty: sirve para cualquier URL.
function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Se ejecuta al montar y cada vez que cambia "url"
  useEffect(() => {
    // useEffect no puede ser async: declaramos la función adentro y la llamamos
    const loadData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(url)

        // fetch NO lanza error con 404 o 500: hay que revisar response.ok a mano
        if (!response.ok) {
          throw new Error('No se pudieron cargar los datos')
        }

        const json = await response.json()
        setData(json)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }

    loadData()
  }, [url])

  // Devolvemos un objeto: el componente toma solo lo que necesita
  return { data, isLoading, error }
}

export default useFetch
