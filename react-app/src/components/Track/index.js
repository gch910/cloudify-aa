import React from "react";
import PlayButton from "../PlayButton";
import { NavLink } from "react-router-dom";
import "./index.css";

const Track = ({ song }) => {
  return (
    <div className="outer-div">
      <NavLink className="album-div" to={`/song/${song.id}`}>
        <div className="playbutton"></div>
        <img alt="Album cover" src={song.image_path} />
        <PlayButton url={song} />
      </NavLink>
      <div className="inner-div">
        <NavLink to={`/profile/${song.user_id}`}>
          <div>
            <span className="">{song.title}</span>
          </div>
          <div>
            <span className="subtitle">{song.user.username}</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Track;
