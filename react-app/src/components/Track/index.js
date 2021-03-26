import React from "react";
import "./index.css";

const Track = ({ source, hyperlink, title }) => {
  return (
    <a href={hyperlink}>
      <div className="outer-div">
        <div>
          <img alt="Album cover" src={source} />
        </div>
        <div>
          <span>{title}</span>
        </div>
      </div>
    </a>
  );
};

export default Track;
