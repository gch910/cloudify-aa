import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import PlayButton from "../PlayButton"

const Track = ({ source, hyperlink, title, artist }) => {
  return (
    <a href={hyperlink} >
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
      {/* <PlayButton url={hyperlink} /> */}
    </a>
  );
};

export default Track;
