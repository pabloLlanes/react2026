import ProfileDetails from './ProfileDetails.jsx'

// ProfileCard NO usa "user": solo lo pasa a ProfileDetails
function ProfileCard({ user }) {
  return (
    <div className="max-w-sm rounded-xl border border-slate-800 bg-slate-900 p-5">
      <ProfileDetails user={user} />
    </div>
  )
}

export default ProfileCard
