import Card from "../components/Card";
import Modal from "../components/Modal";

export default function Pokemons() {
  let numeroPokemons = 18;
  return (
    <main>
      <h1>{numeroPokemons} Pokemons para você escolher o seu favorito</h1>
      <label htmlFor="searchPokemons">
        Digite o nome do pokemon: <br />
        <input
          type="search"
          placeholder="Pikachu"
          id="searchPokemons"
          autoComplete="pokemonsName"
        />
        <button>imagem de lupa</button>
      </label>
      <br />
      <label htmlFor="pokemonType">
        Selecione o tipo do Pokemon: <br />
        <select name="Type" id="pokemonType">
          <option value="">Tipo</option>
          <option value="normal">Normal</option>
          <option value="fire">Fogo</option>
          <option value="water">Água</option>
          <option value="eletric">Elétrico</option>
          <option value="grass">Planta</option>
          <option value="bug">Inseto</option>
          <option value="ground">Terra</option>
          <option value="flying">Voador</option>
          <option value="fighting">Lutador</option>
          <option value="dragon">Dragão</option>
          <option value="ice">Gelo</option>
          <option value="steel">Aço</option>
          <option value="rock">Pedra</option>
          <option value="ghost">Fantasma</option>
          <option value="poison">Veneno</option>
          <option value="fairy">Fada</option>
          <option value="dark">Sombrio</option>
          <option value="psychic">Psíquico</option>
        </select>
      </label>
      <Card />
      <Modal />
    </main>
  )
}