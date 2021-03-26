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

  return (
    isLoaded && (
      <div className="center">
        <div>
          <h1>My Home </h1>
          <CarouselSongs songs={rap} title={"Rap"} />
          <CarouselSongs songs={pop} title={"Pop"} />
          <CarouselSongs songs={electronic} title={"Electronic"} />
          <CarouselSongs songs={rnb} title={"R&B"} />
          <CarouselSongs songs={jazz} title={"Jazz"} />
          <CarouselSongs songs={rock} title={"Rock"} />
        </div>
      </div>
    )
  );
};

export default Home;
