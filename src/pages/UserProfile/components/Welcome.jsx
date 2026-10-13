import WelcomeMessage from './WelcomeMessage.jsx'

// Welcome NO usa "user": solo lo pasa a WelcomeMessage
function Welcome({ user }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <WelcomeMessage user={user} />
    </div>
  )
}

export default Welcome
