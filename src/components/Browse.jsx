import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
    useNowPlayingMovies()
  return (
    <div className='max-w-[1440px] w-full mx-auto'>
        <Header />
        <MainContainer />
        <SecondaryContainer />
    </div>
  )
}

export default Browse