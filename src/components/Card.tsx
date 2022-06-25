type Pokemon = {
  id: number,
  name: string,
  types: []
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
}

export default function Card (pokemon: Pokemon) {
  return (
    <div>
      <p>{pokemon.id}</p>
      <p>{pokemon.name}</p>
      <div>
        <ul>
          {pokemon.types.map((types: any) => <li key={types.type.name}>{types.type.name}</li>)}
        </ul>
        <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      </div>
    </div>
  )
} 