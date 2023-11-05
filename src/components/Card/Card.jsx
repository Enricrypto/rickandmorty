import './styles.css'

const Card = ({ characterList, searchResults, displayedCharacters }) => {
  const filteredCharacters =
    searchResults.length > 0 ? searchResults : characterList

  const charactersToDisplay = filteredCharacters.slice(0, displayedCharacters)

  return (
    <>
      <ul className='characters-list'>
        {charactersToDisplay.map((char) => (
          <li className='character' key={char.id}>
            <img src={char.image} alt={`${char.name} image`} />
            <h2>{char.name}</h2>
            <p>Status: {char.status}</p>
            <p>Species: {char.species}</p>
            <p>Gender: {char.gender}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Card
