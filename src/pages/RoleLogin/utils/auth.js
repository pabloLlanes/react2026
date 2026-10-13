// Todo lo que tiene que ver con el usuario y localStorage está acá,
// así los componentes no repiten JSON.parse / JSON.stringify

// Usuarios de prueba (en un proyecto real los valida el backend y él genera el token)
const users = [
  { email: 'admin@mail.com', password: '1234', role: 'admin', token: 'token-admin-123' },
  { email: 'user@mail.com', password: '1234', role: 'user', token: 'token-user-456' },
]

const STORAGE_KEY = 'user'

// Busca el usuario y, si existe, guarda { email, token, role } (nunca la contraseña)
export function login(email, password) {
  const foundUser = users.find((user) => user.email === email && user.password === password)

  if (!foundUser) return false

  const userToSave = { email: foundUser.email, token: foundUser.token, role: foundUser.role }
  // localStorage solo guarda texto: convertimos el objeto a string
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userToSave))
  return true
}

// Devuelve el usuario como objeto, o null si no hay nadie logueado
export function getUser() {
  const savedUser = localStorage.getItem(STORAGE_KEY)
  return savedUser ? JSON.parse(savedUser) : null
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY)
}
