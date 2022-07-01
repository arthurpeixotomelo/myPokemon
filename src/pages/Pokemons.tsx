import Card from "../components/Card";
import Modal from "../components/Modal";
import { useEffect, useMemo, useState, useCallback } from "react";
import {
  pokemonURL,
  getPokemonsPerPage,
  getPokemonsData,
} from "../functions/data";
import styled from "styled-components";

const Search = styled.div`
  margin-bottom: var(--space1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space1);
`;

const Input = styled.input`
  width: 80%;
`;

const Pages = styled.ul`
  display: flex;
  list-style: none;
  gap: var(--space2);
`;

const Button = styled.button`
  padding: 0 var(--space1);
  border: none;
  border-radius: var(--b1);
  & li {
    cursor: pointer;
  }
`;

const Cards = styled.main`
  margin-inline: var(--space4);
  display: flex;
  flex-wrap: wrap;
  gap: var(--space1);
`;

export default function Pokemons() {
  const [currentPage, setCurrentPage] = useState(1);
  const maxCards = 18;
  const totalPages = Math.ceil(pokemonURL.length / maxCards);
  const handlePrevClick = () => {
    if (currentPage != 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };
  const prevCards = (currentPage - 1) * maxCards;
  const currentCards = currentPage * maxCards;
  const [cardsInPage, setCardsInPage] = useState<any[]>([]);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(
    getPokemonsPerPage(prevCards, currentCards)
  );
  const getCardsInPageData = async () => {
    const data = await getPokemonsData(pokemonsPerPage);
    setCardsInPage(data);
  };
  useEffect(() => {
    getCardsInPageData();
  });
  useMemo(() => {
    setPokemonsPerPage(getPokemonsPerPage(prevCards, currentCards));
    getCardsInPageData();
  }, [currentPage]);
  return (
    <>
      <Search>
        <h1>{pokemonURL.length} Pokemons para você escolher o seu favorito</h1>
        <Input type="search" placeholder="Pesquisar pokemon" id="searchPokemons"
        />
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
        <Pages>
          {
            <Button onClick={handlePrevClick}>
              <li>&#60;</li>
            </Button>
          }
          {<li>{currentPage}</li>}
          {
            <Button onClick={handleNextClick}>
              <li>&#62;</li>
            </Button>
          }
        </Pages>
      </Search>
      <Cards>
        {cardsInPage.map((pokemon: any) => (
          <Card key={pokemon.name} {...pokemon} />
        ))}
      </Cards>
    </>
  );
}
