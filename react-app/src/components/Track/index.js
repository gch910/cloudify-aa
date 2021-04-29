import React from "react";
import PlayButton from "../PlayButton";
import { NavLink } from "react-router-dom";
import "./index.css";

const Track = ({ song, button = true }) => {
  //using button switch variable to be able to use track again in the playbar.
  //when button is false it only renders a clickable and scalable album cover
  //that is being used in the playbar.
  return (
    <div className="outer-div">
      <NavLink className="album-div" to={`/song/${song.id}`}>
        <div className="playbutton"></div>
        <img alt="Album cover" src={song.image_path} />
        {button ? (
          <div className="button-wrapper">
            <PlayButton url={song} />
          </div>
        ) : (
          ""
        )}
      </NavLink>
      {button ? (
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Track;
