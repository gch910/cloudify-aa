import React from "react";

const Track = ({ source, hyperlink }) => {
  return (
    <a href={hyperlink}>
      <img src={source} />
    </a>
  );
};

export default Track;
