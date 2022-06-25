export default function Modal(pokemon: any) {
  const total = () => {
    let value = 0
    pokemon.stats.map((stats: any) => {value += stats.base_stat})
    return value
  }
  return (
    <dialog open>
      <p>
        <span>{pokemon.name}</span>
        <span>{pokemon.id}</span>
      </p>
      <ul>
        {pokemon.types.map((types: any) => <li>{types.type.name}</li>)}
      </ul>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      <p>Descrição</p>
      <p>
        <span>Peso {pokemon.weight}</span>
        <span>Altura {pokemon.height}</span>
      </p>
      <p>
        Características
      </p>
      <ul>
        <li>Saúde {pokemon.stats[0].base_stat}</li>
        <li>Ataque {pokemon.stats[1].base_stat}</li>
        <li>Defesa {pokemon.stats[2].base_stat}</li>
        <li>Ataque Especial {pokemon.stats[3].base_stat}</li>
        <li>Defesa Especial {pokemon.stats[4].base_stat}</li>
        <li>Velocidade {pokemon.stats[5].base_stat}</li>
        <li>Total {total()}</li>
      </ul>
      <p>Pontos Fortes e Fracos</p>
    </dialog>
  )
}