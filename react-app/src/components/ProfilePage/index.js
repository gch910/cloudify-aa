import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileSongs from "./ProfileSongs";
import "./ProfilePage.css";

const ProfilePage = () => {
  const sessionUser = useSelector((state) => state.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const [songsClicked, setSongsClicked] = useState(true);
  const [popularClicked, setPopularClicked] = useState(false);
  useEffect(() => {
    if (sessionUser.user) setIsLoaded(true);
  }, []);

  const displaySongs = () => {
    setSongsClicked(true);
    setPopularClicked(false);
  };
  const displayPopular = () => {
    setSongsClicked(false);
    setPopularClicked(true);
  };

  return (
    isLoaded && (
      <div id="profile-page-container">
        <div id="profile-page-contents">
          <div id="profile-header">
            <img
              id="profile-image"
              src="https://i.stack.imgur.com/l60Hf.png"
              alt="profile picture"
            />
            <h1 id="profile-username">{sessionUser.user.username}</h1>
          </div>
          <nav id="profile-nav">
            <button
              className="profile-nav-link no-outline"
              onClick={displaySongs}
            >
              Songs
            </button>
            <button
              className="profile-nav-link no-outline"
              onClick={displayPopular}
            >
              Popular
            </button>
          </nav>
          <div id="profile-display">
            <div id="profile-songs-div">
              {songsClicked ? <ProfileSongs /> : ""}
            </div>
            <div id="profile-popular-div">
              {popularClicked ? <h1>Popular</h1> : ""}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
