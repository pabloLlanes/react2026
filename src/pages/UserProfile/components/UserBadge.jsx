// UserBadge SÍ usa "user": es el último de la cadena Header → Navbar → UserBadge
function UserBadge({ user }) {
  return (
    <span className="ml-auto rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-400">
      👤 {user.name}
    </span>
  )
}

export default UserBadge
