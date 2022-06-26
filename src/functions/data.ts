export const fetchData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
  const data = await response.json()
  const pokemons = await data.results
  const urls = pokemons.map((pokemon: any) => pokemon.url)
  return localStorage.setItem('pokemons', JSON.stringify(urls))
}

const getStoredData = () => {
  const urls = localStorage.getItem('pokemons') || '[]'
  const stored = JSON.parse(urls)
  return stored
}

export const pokemonURL = getStoredData()

// export function getPokemonsPerPage(itens: number) {
//   const pokemonsInPage = pokemonURL.filter((v: any, i: number) => i < itens).map((obj: any) => obj) 
//   return pokemonsInPage
// }

export function getPokemonsPerPage(from: number, to: number) {
  const pokemonsInPage = pokemonURL.slice(from, to).map((obj: any) => obj) 
  return pokemonsInPage
}

export const getPokemonsData = async (array: []) => {
  const response = await Promise.all(array.map((url: string) => fetch(url)))
  const data = await Promise.all(response.map((res) => res.json()))
  return data
}