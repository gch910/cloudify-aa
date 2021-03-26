import React, { useState } from "react";
import "./PlayBar.css";

const PlayBar = () => {
  const [audio, setAudio] = useState(new Audio("songs/test_song.mp3"));
  const [playing, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [progress, setProgress] = useState(0)

  let playingInterval
  const play = () => {
    audio.play();
    setIsPlaying(true)
    playingInterval = setInterval(() => {
      setTimeElapsed(timeFormat(audio.currentTime))
      setProgress(audio.currentTime)
    }, 1000);
  }
  const pause = () => {
    audio.pause();
    clearInterval(playingInterval)
    setIsPlaying(false)
  }
  const timeFormat = (time) => {
    let minute = Math.floor(time / 60);
    let remainder = Math.floor(time % 60);
    let seconds =
      remainder % 60 < 10 ? `0${remainder % 60}` : `${remainder % 60}`;
    return `${minute}:${seconds}`;
  };

  const showProgress = (e) => {
    audio.currentTime = e.target.value
    setTimeElapsed(e.target.value)
  }


  return (
    <div className='PlayBar'>
      <div className='AudioControls'>
        <button onClick={playing ? pause : play}>{playing ? <i class="fas fa-pause"></i> : <i class="fas fa-play"></i>}</button>
      </div>
      <div className='ProgressBar'>
        <span>{timeFormat(audio.currentTime)}</span>
        <input
          className='Bar'
          type='range'
          step='0.01'
          min='0'
          defaultValue='0'
          value={progress}
          max={audio.duration}
          onInput={showProgress} />
        <span>{timeFormat(audio.duration)}</span>
      </div>
      <div className="ArtistInfo">
        <img
          src="http://is5.mzstatic.com/image/thumb/Music128/v4/9e/db/51/9edb5133-7595-700f-9038-b7cf5ddc69f5/source/100000x100000-999.jpg"
          alt="artist"
        />
        <div className="SongDetails">
          <div>Artist</div>
          <div>Title</div>
        </div>
      </div>
    </div>
  )

};

export default PlayBar;
