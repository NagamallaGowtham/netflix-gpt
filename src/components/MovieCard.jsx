import React from 'react'
import { CDN_IMAGE_URL } from '../utils/movieapi'

const MovieCard = ({movie}) => {
  return (
    <div className='min-w-[250px] w-full'>
        <img src={CDN_IMAGE_URL + movie?.poster_path} alt="" />
    </div>
  )
}

export default MovieCard