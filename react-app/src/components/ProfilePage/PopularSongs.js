import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSongs } from "../../store/songs";
import { useParams } from "react-router-dom";
import Track from "../Track";
import PlayButton from "../PlayButton";
import ProfileSongInfo from "./ProfileSongInfo";

const PopularSongs = () => {
  const { userId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const userSongs = useSelector((state) => state.songs.user_songs);

  let userSongsValues;
  isLoaded
    ? (userSongsValues = Object.values(userSongs))
    : (userSongsValues = null);

  useEffect(() => {
    dispatch(getUserSongs(userId)).then((req) => setIsLoaded(true));
  }, [dispatch, userId]);

  return (
    isLoaded && (
      <div id="profile-songs">
        {userSongsValues.slice(1).map((song, idx) => (
          //    <div>{song.title}</div>
          <>
            <ProfileSongInfo songId={song.id} />
            {/* <Track key={idx} song={song} /> */}
            {/* <div id="button-wrapper">
              <PlayButton songId={song.song_path} />
            </div> */}
          </>
        ))}
      </div>
    )
  );
};

export default PopularSongs;
