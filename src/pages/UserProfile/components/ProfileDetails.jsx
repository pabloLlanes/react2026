// ProfileDetails SÍ usa "user"
function ProfileDetails({ user }) {
  return (
    <ul className="space-y-1">
      <li>Nombre: {user.name}</li>
      <li>Email: {user.email}</li>
    </ul>
  )
}

export default ProfileDetails
