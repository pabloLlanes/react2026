import { createContext } from 'react'

// 1️⃣ CREAR el contexto: una "caja" que guarda valores para que
//    cualquier componente de adentro los pueda leer SIN recibir props
export const PreferencesContext = createContext()
