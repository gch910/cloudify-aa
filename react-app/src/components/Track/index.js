import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Track = ({ source, hyperlink, title, artist, user_id }) => {
  return (
    <div>
      <div className="outer-div">
        <a href={user_id}>
          <div>
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
    </div>
  );
};

export default Track;
