import React from "react";
import "./CarouselButton.css";

const CarouselButton = ({ className, style, onClick, next }) => {
  return (
    <div className="button-div">
      <i
        id="arrow"
        className={className}
        style={{ ...style, display: "flex" }}
        onClick={onClick}
        className={next ? "fas fa-angle-right" : "fas fa-angle-left"}
      ></i>
    </div>
  );
};

export default CarouselButton;
