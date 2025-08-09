import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/movieapi'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({movieId}) => {
  const dispatch = useDispatch();
  const trailerKey = useSelector(store => store.movies?.trailerVideo)

  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
    const json = await data.json();

    const filteredTrailer = json.results.filter(video => video.type === "Trailer");
    const trailer = filteredTrailer.length ? filteredTrailer[0] : json.results[0]
    
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMovieVideos();
  }, [])
  return (
    <div>
      <iframe className='w-screen aspect-video fixed left-0 right-0 top-0'
        src={"https://www.youtube.com/embed/"+trailerKey?.key+"?autoplay=1&mute=1&loop=1&playlist="+trailerKey?.key+""} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
      >
      </iframe>
    </div>
  )
}

export default VideoBackground