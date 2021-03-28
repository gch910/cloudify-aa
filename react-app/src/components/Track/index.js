import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

<<<<<<< HEAD
const Track = ({ source, hyperlink, title, artist }) => {
=======
const Track = ({ source, hyperlink, title, id }) => {
>>>>>>> main
  return (
    <a href={hyperlink}>
      <div className="outer-div">
        <div>
          <img alt="Album cover" src={source} />
        </div>
        <div>
<<<<<<< HEAD
          <span className="">{title}</span>
        </div>
        <div>
          <span className="subtitle">{artist}</span>
=======
          <Link to={`/song/${id}`}><span>{title}</span></Link>
>>>>>>> main
        </div>
      </div>
    </a>
  );
};

export default Track;
