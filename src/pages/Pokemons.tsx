import Card from "../components/Card";
import Modal from "../components/Modal";
import { useEffect, useMemo, useState } from "react";
import { getData, storePokemonsData } from "../functions/data";

export default function Pokemons() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemons, setPokemons] = useState(storePokemonsData());
  const [pokemonsData, setPokemonsData] = useState<any[]>([]);
  const pages = []
  const maxItens = 18
  const totalPages = pokemons.length / maxItens
  for (let i = 1 ; i <= totalPages ; i++) {
    pages.push(i)
  }
  const urls = pokemons.filter((v: string, i: number) => i < (currentPage * maxItens) && i >= ((currentPage - 1) * maxItens)).map((pokemon: any) => pokemon.url)
  const getPokemonData = async () => {
    const data = await Promise.all(urls.map((url: string) => fetch(url)))
    const pokemonsData = await Promise.all(data.map((res) => res.json()))
    setPokemonsData(pokemonsData)
  }
  useEffect(() => {
    if (pokemons === "") {
      getData()
    }
   }, []);
   useMemo(() => {
    getPokemonData()
   }, [pokemonsData])
   const handlePrevClick = () => {
    if (currentPage != 1) {
      setCurrentPage(prev => prev - 1)
    }
  } 
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1)
    }
  }
  return (
    <main>
      <h1>{pokemons.length} Pokemons para você escolher o seu favorito</h1>
      <label htmlFor="searchPokemons">
        Digite o nome do pokemon:
        <input
          type="search"
          placeholder="Pikachu"
          id="searchPokemons"
          autoComplete="pokemonsName"
        />
        <button>imagem de lupa</button>
      </label>
      <label htmlFor="pokemonType">
        Selecione o tipo do Pokemon:
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
      <ul>
        {<li onClick={handlePrevClick}>&#60;</li>}
        {<li>{currentPage}</li>}
        {<li onClick={handleNextClick}>&#62;</li>}
      </ul>
      {pokemonsData.map((pokemon) => <Card key={pokemon.name} {...pokemon} />)}
    </main>
  )
}