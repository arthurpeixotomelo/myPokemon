import banner from '../img/banner.svg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { fetchData } from '../functions/data';
import styled from "styled-components";

const Main = styled.main`
  margin: var(--space4);
  display: flex;
  justify-content: space-around;
`;

const Img = styled.img`
  height: 75vh;
`;

const Text = styled.div`
  width: calc(var(--space4) * 4);
  display: flex;
  flex-direction: column;
  gap: var(--space3);
`;

const StyledLink = styled(Link)`
color: var(--primary);
width: calc(var(--space4) * 2);
padding: var(--space1);
text-align: center;
border-radius: var(--b1);
background-color: #48D0B0;
box-shadow: var(--buttonshadow);
`;


export default function Home() {
  useEffect(() => {
    fetchData()
   });
  return (
    <Main>
      <Text>  
        <h1>Qual Pokemon você escolheria?</h1>
        <p>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</p>
        <StyledLink to='/pokemons'>Veja os pokemons</StyledLink>
      </Text>
      <Img src={banner} alt="Banner photo" />
    </Main>
  )
}