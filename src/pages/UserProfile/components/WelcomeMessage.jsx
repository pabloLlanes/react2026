// WelcomeMessage SÍ usa "user"
function WelcomeMessage({ user }) {
  return <p className="text-2xl font-semibold">¡Hola, {user.name}! 👋</p>
}

export default WelcomeMessage
