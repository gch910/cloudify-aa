import React from "react";
import PlayButton from "../PlayButton";
import { NavLink } from "react-router-dom";
import "./index.css";

const Track = ({ source, hyperlink, title, artist, user_id, song_id }) => {
  return (
    <div className="outer-div">
      <NavLink to={`/song/${song_id}`}>
        <div>
          <div className="playbutton"></div>
          <img alt="Album cover" src={source} />
          <PlayButton url={hyperlink} />
        </div>
      </NavLink>
      <div className="inner-div">
        <NavLink to={`/profile/${user_id}`}>
          <div>
            <span className="">{title}</span>
          </div>
          <div>
            <span className="subtitle">{artist}</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Track;
