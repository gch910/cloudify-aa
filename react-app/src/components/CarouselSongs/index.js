import React from "react";
import Track from "../Track";
import "./Carousel.css";
import Slider from "react-slick";
import CarouselButton from "./CarouselButton";

const CarouselSongs = ({ songs, title }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    nextArrow: <CarouselButton next={true} />,
    prevArrow: <CarouselButton next={false} />,
  };
  return (
    songs && (
      <div className="carousel-container">
        <div className="headers">
          <div>
            <div className="title">{title}</div>
          </div>
          <div>
            <div className="subtitle grey">The latest and hottest {title}</div>
          </div>
        </div>
        <div className="carousel-div">
          <Slider style={{ maxHeight: "100%", maxWidth: "100%" }} {...settings}>
            {songs.map((el, idx) => (
              <div key={idx}>
                <Track
                  key={idx}
                  source={el.image_path}
                  hyperlink={el.song_path}
                  user_id={`profile/${el.user_id}`}
                  title={el.title}
                  artist={el.user.username}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  );
};

export default CarouselSongs;
