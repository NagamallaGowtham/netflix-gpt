import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='video-title'>
      <h2 className='text-xl md:text-6xl text-white font-bold'>{title}</h2>
      <p className='hidden md:inline-block py-6 text-lg text-white'>{overview}</p>
      <div className="cta-wrapper">
        <button className="bg-white text-black p-2 text-xl rounded-lg min-w-[150px]">
          ▶️ Play
        </button>
        <button className="ms-2 p-2 bg-gray-500 text-white text-xl rounded-lg min-w-[150px]">
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle