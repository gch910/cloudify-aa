import React from "react";
import "./index.css";

const Track = ({ source, hyperlink }) => {
  return (
    <a href={hyperlink}>
      <img alt="Album cover" src={source} />
    </a>
  );
};

export default Track;
