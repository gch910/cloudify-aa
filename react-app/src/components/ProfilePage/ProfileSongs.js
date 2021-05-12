import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSongs } from "../../store/songs";
import { useParams } from "react-router-dom";
import Track from "../Track";
import PlayButton from "../PlayButton";
import ProfileSongInfo from "./ProfileSongInfo";

const ProfileSongs = () => {
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
        {userSongsValues.map((song, idx) => (
          //    <div>{song.title}</div>
          <>
            <ProfileSongInfo song={song} />
            {/* <Track key={idx} song={song} /> */}
            {/* <div id="button-wrapper">
              <PlayButton songId={song.id} />
            </div> */}
          </>
        ))}
      </div>
    )
  );
};

export default ProfileSongs;
