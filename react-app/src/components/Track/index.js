import React from "react";
import "./index.css";

const Track = ({ source, hyperlink, title, artist }) => {
  return (
    <a href={hyperlink}>
      <div className="outer-div">
        <div>
          <img alt="Album cover" src={source} />
        </div>
        <div>
          <span className="">{title}</span>
        </div>
        <div>
          <span className="subtitle">{artist}</span>
        </div>
      </div>
    </a>
  );
};

export default Track;
