import React, { useState } from "react";
import "./PlayBar.css";

const PlayBar = () => {
  const [audio] = useState(new Audio("songs/test_song.mp3"));
  const [playing, isPlaying] = useState(false);

  const play = () => {
    audio.play();
    isPlaying(true);
    console.log(playing);
  };

  const pause = () => {
    audio.pause();
    isPlaying(false);
    console.log(playing);
  };

  console.log(playing);

  return (
    <div className="PlayBar">
      <audio className="song" src="songs/test_song.mp3" type="audio/mpeg" />
      <div>
        Audio Controls
        <button onClick={isPlaying ? pause : play}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
      <div>Progress Bar</div>
      <div>Artist Info</div>
    </div>
  );
};

export default PlayBar;
