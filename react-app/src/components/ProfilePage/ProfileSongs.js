import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSongs } from "../../store/songs";
import { useParams } from "react-router-dom";
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
          <ProfileSongInfo song={song} />
        ))}
      </div>
    )
  );
};

export default ProfileSongs;
