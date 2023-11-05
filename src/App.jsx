import { useState, useEffect } from 'react'
import Card from './components/Card/Card.jsx'
import './App.css'
import Logo from '../src/assets/RickandMortyLogo.png'
import { getCharacters } from './service/characters'

export const App = () => {
  const [characterList, setCharacterList] = useState([])
  const [searchCharacter, setSearchCharacter] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [displayedCharacters, setDisplayedCharacters] = useState(10)
  const charactersPerPage = 10

  const fetchCharacters = async () => {
    const res = await getCharacters()
    setCharacterList(res)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearchCharacter(newSearch)

    const result = characterList.filter((item) => {
      if (typeof item.name === 'string') {
        return item.name.toLowerCase().includes(newSearch.toLowerCase())
      }
      return false
    })

    setSearchResults(result)
  }

  const handleSearch = () => {
    const result = characterList.filter((item) => {
      if (typeof item.name === 'string') {
        return item.name.toLowerCase().includes(searchCharacter.toLowerCase())
      }
      return false
    })

    setSearchResults(result)
  }

  const loadMoreCharacters = () => {
    setDisplayedCharacters((prevCount) => prevCount + charactersPerPage)
  }

  return (
    <div className='page'>
      <header>
        <div className='image-container'>
          <img src={Logo} alt='Rick and Morty Logo' />
        </div>
        <h2>Search by Character</h2>
        <div className='search-form'>
          <input
            onChange={handleChange}
            value={searchCharacter}
            name='character'
            placeholder='Rick Sanchez, Morty Smith... '
          />
          <button className='search-button' onClick={handleSearch}>
            Search
          </button>
        </div>
      </header>
      <main>
        <Card
          characterList={
            searchResults.length > 0 ? searchResults : characterList
          }
          searchResults={searchResults}
          displayedCharacters={displayedCharacters}
        />
        {displayedCharacters < characterList.length && (
          <button className='more-button' onClick={loadMoreCharacters}>
            Load More
          </button>
        )}
      </main>
    </div>
  )
}
