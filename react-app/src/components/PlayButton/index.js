import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentSong,
  setSongPause,
  setSongPlaying,
} from "../../store/playing";
import "./PlayButton.css";

const PlayButton = (song) => {
  const dispatch = useDispatch();
  let currentStatus = useSelector((state) => state.playing?.status);
  const currentSong = useSelector((state) => state.playing?.song?.id);

  const onSong = currentSong === song.url.id;


  const setSong = (e) => {
    e.preventDefault();
    if (currentStatus && onSong) {
      return dispatch(setSongPause());
    } else if (!currentStatus && onSong) {
      return dispatch(setSongPlaying());
    }
    return dispatch(setCurrentSong(song));
  };

  return (
    <div
      onClick={setSong}
      className={`${onSong && currentStatus ? "pause" : "play"} icon`}
    ></div>
  );
};

export default PlayButton;
