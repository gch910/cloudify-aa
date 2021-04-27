import React from "react";
import PlayButton from "../PlayButton";
import "./index.css";

const Track = ({ source, hyperlink, title, artist, user_id }) => {
  return (
    <a href={hyperlink}>
      <div className="outer-div">
        <a href={user_id}>
          <div>
            <div className="playbutton">
              <PlayButton />
            </div>
            <img alt="Album cover" src={source} />
          </div>
        </a>
        <a href={user_id}>
          <div>
            <span className="">{title}</span>
          </div>
          <div>
            <span className="subtitle">{artist}</span>
          </div>
        </a>
      </div>
    </a>
  );
};

export default Track;
