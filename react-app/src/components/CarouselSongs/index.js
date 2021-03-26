import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "./Carousel.css";
import Track from "../Track";

const CarouselSongs = ({ songs }) => {
  return (
    <div className="carousel-div">
      <Carousel
        style={{ height: "100%", width: "100%" }}
        plugins={[
          "arrows",
          "infinite",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 4,
            },
          },
        ]}
      >
        {songs.map((el, idx) => (
          <Track
            key={idx}
            source={el.image_path}
            hyperlink={el.song_path}
            title={el.title}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSongs;
