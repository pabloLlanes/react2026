import ProfileCard from '../components/ProfileCard.jsx'

// ProfilePage NO usa "user": solo lo pasa a ProfileCard
function ProfilePage({ user }) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Perfil</h1>
      <ProfileCard user={user} />
    </div>
  )
}

export default ProfilePage
