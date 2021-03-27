import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Track = ({ source, hyperlink, title, id }) => {
  return (
    <a href={hyperlink}>
      <div className="outer-div">
        <div>
          <img alt="Album cover" src={source} />
        </div>
        <div>
          <Link to={`/song/${id}`}><span>{title}</span></Link>
        </div>
      </div>
    </a>
  );
};

export default Track;
