import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
            <h1>{sessionUser.user.username}</h1>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
