const RICK_AND_MORTY_CHARACTERS = 'https://rickandmortyapi.com/api/character'

export const getCharacters = async () => {
  const res = await fetch(RICK_AND_MORTY_CHARACTERS)
  const { results } = await res.json()
  return results
}
