import Card from '../components/Card';
import Modal from '../components/Modal';
import { useEffect, useMemo, useState } from 'react';
import { pokemonURL, getPokemonsPerPage, getPokemonsData } from '../functions/data';

export default function Pokemons() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxCards = 18
  const totalPages = Math.ceil(pokemonURL.length / maxCards)
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
  const prevCards = (currentPage - 1) * maxCards
  const currentCards = currentPage * maxCards
  const [pokemonsInPage, setPokemonsInPage] = useState<any[]>([]);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(getPokemonsPerPage(0, maxCards));
  const getPokemonsInPageData = async () => {
    const data = await getPokemonsData(pokemonsPerPage)
    setPokemonsInPage(data)
  }
  useEffect(() => {
    getPokemonsInPageData()
  })
  useMemo(() => {
    setPokemonsPerPage(getPokemonsPerPage(prevCards, currentCards))
    getPokemonsInPageData()
  }, [currentPage])
  return (
    <main>
      <h1>{pokemonURL.length} Pokemons para você escolher o seu favorito</h1>
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
      {pokemonsInPage.map((pokemon: any) => <Card key={pokemon.name} {...pokemon} />)}
    </main>
  )
}