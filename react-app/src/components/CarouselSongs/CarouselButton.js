import React from "react";

const CarouselButton = ({ className, style, onClick, next }) => {
  return (
    <i
      className={className}
      style={{ ...style, width: "20px", height: "20px" }}
      onClick={onClick}
      className={next ? "fas fa-angle-right" : "fas fa-angle-left"}
    ></i>
  );
};

export default CarouselButton;
