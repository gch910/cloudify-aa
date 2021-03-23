import React, { useState, useEffect } from 'react';
import './PlayBar.css'

const PlayBar = () => {

  const [audio] = useState(new Audio("songs/test_song.mp3"))
  const [playing, isPlaying] = useState(false)


  const play = () => {
    audio.play();
    isPlaying(true)
  }

  const pause = () => {
    audio.pause();
    isPlaying(false)
  }

  return (
    <div className='PlayBar'>
      <audio
        className='song'
        src="songs/test_song.mp3"
        type="audio/mpeg"
      />
      <div className='AudioControls'>
        <button onClick={playing ? pause : play}>{playing ? 'Pause' : 'Play'}</button>
      </div>
      <div className='ProgressBar'>
        <input type='range' />
      </div>
      <div>Artist Info</div>

    </div>
  )
}

export default PlayBar
