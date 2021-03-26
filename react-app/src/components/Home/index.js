import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllSongs } from "../../store/songs";
import CarouselSongs from "../CarouselSongs";
import UploadSongForm from "../UploadSongForm";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => Object.values(state.songs));
  const [isLoaded, setIsLoaded] = useState(false);
  const pop = songs.filter((el) => el.genre_id === 4);
  const rap = songs.filter((el) => el.genre_id === 1);
  const electronic = songs.filter((el) => el.genre_id === 6);
  const rnb = songs.filter((el) => el.genre_id === 3);
  const jazz = songs.filter((el) => el.genre_id === 5);
  const rock = songs.filter((el) => el.genre_id === 2);

  useEffect(() => {
    if (songs) {
      dispatch(getAllSongs()).then((req) => setIsLoaded(true));
    }
  }, [dispatch]);
  console.log(rap)
  return (
    isLoaded && (
      <div className="center">
        <div>
          <h1>My Home </h1>
          {/* <UploadSongForm /> */}
          
          <CarouselSongs songs={rap} />
          <CarouselSongs songs={pop} />
          <CarouselSongs songs={electronic} />
          <CarouselSongs songs={rnb} />
          <CarouselSongs songs={jazz} />
          <CarouselSongs songs={rock} />
        </div>
        {/* <div className="right-side">wall</div> */}
      </div>
    )
  );
};

export default Home;
