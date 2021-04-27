import React from "react";
import "./CarouselButton.css";

const CarouselButton = ({ className, style, onClick, next }) => {
  return (
    <div className="button button-div">
      <i
        id="arrow"
        className={
          (className, next ? "fas fa-angle-right" : "fas fa-angle-left")
        }
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      ></i>
    </div>
  );
};

export default CarouselButton;
