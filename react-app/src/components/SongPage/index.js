import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSong } from "../../store/songs";
import "./SongPage.css";

const SongPage = () => {
  const { songId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.user);
  const song = useSelector((state) => state.songs.currentSong);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getSong(songId)).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <div id="song-page-container">
        <div id="song-page-contents">
          <div id="song-header">
            <div id="song-image-div">
              <img id="song-image" src={song.image_path} alt="song picture" />
            </div>
            <div id="song-headers">
              <h1 id="song-title">{song.title}</h1>
              <h3 id="song-username">
                {sessionUser ? sessionUser.user.username : ""}
              </h3>
            </div>
            <div id="song-genre-div">
              <h3 id="song-genre"># {song.genre_name}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SongPage;
