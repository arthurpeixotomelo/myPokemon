export const getData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
  const data = await response.json()
  const pokemons = await data.results
  return localStorage.setItem("pokemons", JSON.stringify(pokemons))
}

export const storePokemonsData = () => {
    const stored = localStorage.getItem("pokemons") || ""
    const initialValue = JSON.parse(stored)
    return initialValue
}