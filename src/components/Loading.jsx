import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

const Loading = () => {
  return (
    <div className='loading'>
        <h1>Rooms data Loading...</h1>
        <img src={loadingGif} alt="Loading gif" />
    </div>
  )
}

export default Loading;