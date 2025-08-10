import React from 'react'
import MovieList from "./MovieList"
import { useSelector } from 'react-redux'

const GptSuggestionMovies = () => {
    const movieNames = useSelector(store => store.gpt?.gptNames)
    const movieResults = useSelector(store => store.gpt?.gptResults)
  return (
    <div className='pt-7'>
        {movieNames?.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResults?.[index]} />)}
    </div>
  )
}

export default GptSuggestionMovies