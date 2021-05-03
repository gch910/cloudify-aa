import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import ProfileSongs from "./ProfileSongs";
import PopularSongs from "./PopularSongs";
import { getArtist } from "../../store/users";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.users.artist);
  const sessionUser = useSelector((state) => state.user.user);
  const [isLoaded, setIsLoaded] = useState(false);
  const [songsClicked, setSongsClicked] = useState(true);
  const [popularClicked, setPopularClicked] = useState(false);
  const history = useHistory();
  useEffect(() => {
    // if (sessionUser.user) setIsLoaded(true);
    dispatch(getArtist(userId)).then(() => setIsLoaded(true));
  }, [dispatch, userId]);

  const displaySongs = () => {
    setSongsClicked(true);
    setPopularClicked(false);
  };
  const displayPopular = () => {
    setSongsClicked(false);
    setPopularClicked(true);
  };

  const changeImg = (e) => {
    e.target.src = "https://static.thenounproject.com/png/396915-200.png";
  };

  return (
    isLoaded && (
      // <div id="profile-page-container">
      // <div id="profile-page-contents">
      <div className="center">
        <div id="home-inner-div">
          <div id="profile-header">
            {sessionUser?.id == userId ? (
              <img
                id="profile-image"
                src={artist?.img}
                alt="profile"
                onMouseEnter={(e) => changeImg(e)}
                onMouseLeave={(e) => (e.target.src = artist?.img)}
                onClick={(e) =>
                  history.push(`/profile-image/upload/${sessionUser?.id}`)
                }
              />
            ) : (
              <img id="profile-image" src={artist?.img} alt="profile" />
            )}
            <h1 id="profile-username">{artist.username}</h1>
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
              {popularClicked ? <PopularSongs /> : ""}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfilePage;
