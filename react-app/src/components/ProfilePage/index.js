import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileSongs from "./ProfileSongs";
import "./ProfilePage.css";

const ProfilePage = () => {
  const sessionUser = useSelector((state) => state.user);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (sessionUser.user) setIsLoaded(true);
  }, []);

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
            <h1>{sessionUser.user.username}</h1>
          </div>
          <nav id="profile-nav">Hello</nav>
          <ProfileSongs />
        </div>
      </div>
    )
  );
};

export default ProfilePage;
