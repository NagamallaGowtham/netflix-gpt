import React from 'react'

const MainContainerShimmer = () => {
  return (
    <div className='relative'>
        <div className='shimmer-ui-video-bg'></div>
        <div className="video-title">
          <div className='shimmer-ui-title'></div>
          <div className='shimmer-ui-desc'></div>
          <div className='shimmer-ui-desc'></div>
          <div className="cta-wrapper flex gap-4 mt-5">
            <div className="shimmer-ui-btn"></div>
            <div className="shimmer-ui-btn"></div>
          </div>
        </div>
    </div>
  )
}

export default MainContainerShimmer