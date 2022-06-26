import banner from '../img/banner.svg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { fetchData } from '../functions/data';

export default function Home() {
  useEffect(() => {
    fetchData()
   });
  return (
    <main>
      <div className='Text'>  
        <h1>Qual Pokemon você escolheria?</h1>
        <h2>Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e habilidades.</h2>
        <button>
          <Link to='/pokemons'>Veja os pokemons</Link>
        </button>
      </div>
      <img src={banner} alt="Banner photo" />
    </main>
  )
}