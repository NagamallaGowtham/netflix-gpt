import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'

const Browse = () => {
    const viewGptSearch = useSelector(store => store.gpt.showGptSearch)

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
  return (
    <div className='max-w-[1440px] w-full mx-auto'>
        <Header />
        {viewGptSearch ? 
          <GptSearchPage /> : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
          )
        }
    </div>
  )
}

export default Browse