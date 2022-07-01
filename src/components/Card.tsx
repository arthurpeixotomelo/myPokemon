import styled from "styled-components";

const Bg = styled.div<any>`
margin: auto;
width: calc(var(--space4) * 2.5);
display: flex;
flex-direction: column;
justify-content: space-evenly;
border-radius: var(--b2);
padding: var(--space1);
background-color: var(--${props => props.type});

@media(max-width: 500px) {
  width: calc(var(--mspace4) * 5)
}
`;

const Id = styled.p`
  margin-left: auto;
`;

const Name = styled.p`
  margin-right: auto;
  color: var(--primary);
  font-weight: bolder;
`;

const Div = styled.div`
display: flex;
justify-content: space-between;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space1);  
`;

const Li = styled.li`
  text-align: center;
  padding: 0 var(--space1);
  background-color: var(--primary);
  background-blend-mode: soft-light;
  opacity: 0.4;
  border-radius: var(--b2);
`;

const Img = styled.img`
  width: calc(var(--space2) * 3);
  aspect-ratio: 1/1;
  
  @media(max-width: 500px) {
    width: calc(var(--mspace4) * 2)
  }
`;

type Pokemon = {
  id: number,
  name: string,
  types: [
    { 
      type: {
        name: string
      }
    }
  ]
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
    <Bg type={pokemon.types[0].type.name}>
      <Id>{pokemon.id}</Id>
      <Name>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</Name>
      <Div>
        <Ul>
          {pokemon.types.map((types: any) => <Li key={types.type.name}>{types.type.name[0].toUpperCase() + types.type.name.substring(1)}</Li>)}
        </Ul>
        <Img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      </Div>
    </Bg>
  )
} 