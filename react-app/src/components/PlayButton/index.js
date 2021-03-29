import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSong } from '../../store/playing'
import "./PlayButton.css";

const PlayButton = (url) => {
  const [audio, setAudio] = useState(null);
  const [playing, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const currentSong = useSelector((state) => state.playing)
  const dispatch = useDispatch();



  const setSong = e => {
    e.preventDefault();
    dispatch(setCurrentSong(url.url))
  }

  return (
    <>
      <div className='PlayButton'>
        <button onClick={setSong}>{playing ? <i class="fas fa-pause"></i> : <i class="fas fa-play"></i>}</button>
      </div>
    </>
  )
}

export default PlayButton
