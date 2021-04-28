import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setSongPause } from "../../store/playing";
import "./PlayButton.css";

const PlayButton = (url) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  let currentStatus = useSelector((state) => state.playing?.status);
  console.log(currentStatus);
  const currentSong = useSelector((state) => state.playing?.song?.id);
  const onSong = currentSong === url.url.id;

  const setSong = (e) => {
    e.preventDefault();
    if (currentStatus && onSong) {
      return dispatch(setSongPause());
    }
    dispatch(setCurrentSong(url));
  };

  useEffect(() => {}, [currentStatus]);

  return (
    <div
      onClick={setSong}
      className={`${onSong && currentStatus ? "pause" : "play"} icon`}
    ></div>
  );
};

export default PlayButton;
