import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movie = useSelector(store => store.movies.nowPlayingMovies);

    if (!movie) return

    const mainMovie = movie[0]
    const {original_title, overview, id} = mainMovie

  return (
    <div className='relative'>
        <VideoBackground movieId={id} />
        <VideoTitle title={original_title} overview={overview} />
    </div>
  )
}

export default MainContainer