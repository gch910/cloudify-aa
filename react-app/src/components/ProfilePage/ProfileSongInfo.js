import React from "react";
import {useSelector} from "react-redux";
import PlayButton from "../PlayButton";
import { Link } from "react-router-dom";

const ProfileSongInfo = ({ song }) => {
  const releaseDate = song.release_date.split(" ").slice(0, 4).join(" ");
  const currentSong = useSelector((state) => state.songs?.currentSong);
  return (
    <div id="profile-song-info">
      <Link id="profile-song-link" to={`/song/${song.id}`}>
        {song.title}
      </Link>
      <div id="button-wrapper" className="artist-play-icon">
        <PlayButton url={song} />
      </div>
      <img id="profile-song-image" src={song.image_path} alt="song" />
      <h3>Release Date: {releaseDate}</h3>
    </div>
  );
};

export default ProfileSongInfo;
