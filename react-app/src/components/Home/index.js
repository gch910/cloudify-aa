import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllSongs } from "../../store/songs";
import CarouselSongs from "../Carousel";
import UploadSongForm from "../UploadSongForm";

const Home = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => Object.values(state.songs));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (songs) {
      dispatch(getAllSongs()).then((req) => setIsLoaded(true));
    }
  }, [dispatch]);

  return (
    isLoaded && (
      <>
        <h1>My Home </h1>
        <UploadSongForm />
        <CarouselSongs />
        {songs.map((song, idx) => (
          <li key={idx}>{song.title}</li>
        ))}
      </>
    )
  );
};

export default Home;
