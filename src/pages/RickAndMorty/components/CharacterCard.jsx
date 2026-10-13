function CharacterCard({ character }) {
  const { name, image, status, species, location } = character

  // Elegimos la clase de Tailwind según el estado del personaje
  let statusColors = ''

  switch (status) {
    case 'Alive':
      statusColors = 'bg-green-500'
      break
    case 'Dead':
      statusColors = 'bg-red-500'
      break
    default:
      statusColors = 'bg-slate-500'
  }

  // Elegimos un emoji según la especie del personaje
  let speciesEmoji = ''

  switch (species) {
    case 'Human':
      speciesEmoji = '🧑'
      break
    case 'Alien':
      speciesEmoji = '👽'
      break
    case 'Robot':
      speciesEmoji = '🤖'
      break
    case 'Animal':
      speciesEmoji = '🐶'
      break
    default:
      speciesEmoji = '❓'
  }

  return (
    <article className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <img src={image} alt={name} className="aspect-square w-full object-cover" />

      <div className="p-4">
        <h2 className="mb-1 truncate text-lg font-semibold">{name}</h2>

        <p className="mb-2 flex items-center gap-2 text-sm">
          <span className={`h-2 w-2 rounded-full ${statusColors}`} />
          {status} - {speciesEmoji} {species}
        </p>

        <p className="text-xs text-slate-400">Última ubicación:</p>
        <p className="truncate text-sm">{location.name}</p>
      </div>
    </article>
  )
}

export default CharacterCard
