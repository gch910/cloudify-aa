import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../store/users";
import { Link } from "react-router-dom";
import "./ArtistPage.css";

const ArtistsPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [isLoaded, setIsLoaded] = useState(false);

  let allUsers;

  useEffect(() => {
    dispatch(getAllUsers()).then(() => setIsLoaded(true));
  }, [dispatch]);

  isLoaded ? (allUsers = Object.values(users)) : (allUsers = null);
  return (
    isLoaded && (
      <div id="artists-page-div">
        {allUsers.map((user, idx) => (
          <div key={idx} id="artist-div">
            <div id="artist-username-div">
              <Link id="artist-username" to={`/profile/${user.id}`}>
                {user.username}
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  );
};

export default ArtistsPage;
