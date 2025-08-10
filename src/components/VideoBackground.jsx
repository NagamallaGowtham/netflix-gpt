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
    <div className='video-bg after:bg-gradient-to-r after:w-full after:h-full after:from-[#332d2d] after:block after:absolute after:top-0'>
      <iframe className=''
        src={"https://www.youtube.com/embed/"+trailerKey?.key+"?autoplay=1&mute=1&loop=1&playlist="+trailerKey?.key+"&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&iv_load_policy=3&color=white"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
      >
      </iframe>
    </div>
  )
}

export default VideoBackground