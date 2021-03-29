import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSong } from '../../store/playing'
import "./PlayButton.css";

const PlayButton = () => {
  const [audio, setAudio] = useState(null);
  const [playing, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const currentSong = useSelector((state) => state.playing)
  const dispatch = useDispatch();

  let playingInterval
  const play = () => {
    audio.play();
    setIsPlaying(true)
    // playingInterval = setInterval(() => {
    //   setTimeElapsed(timeFormat(audio.currentTime))
    //   setProgress(audio.currentTime)
    // }, 1000);
  }
  const pause = () => {
    audio.pause();
    // clearInterval(playingInterval)
    setIsPlaying(false)
  }




  const setSong = e => {
    e.preventDefault();
    dispatch(setCurrentSong('https://cloudify.s3.amazonaws.com/a0ccc627f21141619bbb370dd3ae3e7a.mp3'))
    setAudio(currentSong)

    if (playing) {
      play()
    } else {
      pause()
    }
  }

  useEffect(() => {
    if (currentSong.playing) {
      console.log('FROM USE EFFECT')
      console.log(currentSong.playing)
      // setAudio(new Audio(currentSong.playing))
      // audio.autoplay = true
      // setIsLoaded(true)
    }
  }, [currentSong])



  return (
    <>
      <div className='PlayButton'>
        <button onClick={setSong}>{playing ? <i class="fas fa-pause"></i> : <i class="fas fa-play"></i>}</button>
      </div>
    </>
  )
}

export default PlayButton
