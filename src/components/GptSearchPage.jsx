import React from 'react'
import GptSearchBox from './GptSearchBox'
import GptSuggestionMovies from './GptSuggestionMovies'

const GptSearchPage = () => {
  return (
    <div className='searchpage-main-wrapper'>
      <GptSearchBox />
      <GptSuggestionMovies />
    </div>
  )
}

export default GptSearchPage