import React, { useEffect, useState } from "react";
import "./PlayBar.css";

const PlayBar = () => {
  const [audio, setAudio] = useState(new Audio("songs/test_song.mp3"));
  const [playing, isPlaying] = useState(false);

  const play = () => {
    audio.play();
    isPlaying(true)
  }

  const pause = () => {
    audio.pause();
    isPlaying(false)
  }

  const timeFormat = (time) => {
    let minute = Math.floor(time / 60)
    let remainder = Math.floor(time % 60)
    let seconds = remainder % 60 < 10 ? `0${remainder % 60}` : `${remainder % 60}`
    return `${minute}:${seconds}`
  }

  return (
    <div className='PlayBar'>
      <audio
        className='song'
        src="songs/test_song.mp3"
        type="audio/mpeg"
      />
      <div className='AudioControls'>
        <button onClick={playing ? pause : play}>{playing ? <i class="fas fa-pause"></i> : <i class="fas fa-play"></i>}</button>
      </div>
      <div className='ProgressBar'>
        <span>{timeFormat(audio.currentTime)}</span>
        <input type='range' />
        <span>{timeFormat(audio.duration)}</span>
      </div>
      <div className='ArtistInfo'>Artist Info</div>
    </div>
  );
};

export default PlayBar;
