import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='py-8 z-30 relative'>
        <h2 className='font-bold text-white text-2xl mb-3.5'>{title}</h2>
        <div className='flex gap-4 overflow-x-scroll hide-scroll'>
            {
                movies?.map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    </div>
  )
}

export default MovieList