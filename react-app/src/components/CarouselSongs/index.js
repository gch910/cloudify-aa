import React from "react";
import Track from "../Track";
import "./Carousel.css";
import Slider from "react-slick";

const CarouselSongs = ({ songs, title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    songs && (
      <div className="carousel-container">
        <div>
          <div>{title}</div>
        </div>
        <Slider style={{ maxHeight: "100%", maxWidth: "100%" }} {...settings}>
          {songs.map((el, idx) => (
            <div>
              <Track
                key={idx}
                source={el.image_path}
                hyperlink={el.song_path}
                title={el.title}
                id={el.id}
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  );
};

export default CarouselSongs;
