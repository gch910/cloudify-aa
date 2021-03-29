import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import ProfileButton from "./ProfileButton";
import { getAllUsers } from "../../store/users";
import "./Navigation.css";

const Navigation = ({ setAuthenticated, navId }) => {
  const dispatch = useDispatch();
  const allSongs = useSelector((state) => Object.values(state.songs));
  const sessionUser = useSelector((state) => state.user);
  const users = useSelector((state) => state.users.users);
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");

  console.log(users);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    let found = false;
    console.log(search);
    allSongs.forEach((song) => {
      if (search === song?.title?.toLowerCase()) {
        found = true;
        return history.push(`/song/${song.id}`);
      }
    });
    allUsers.forEach((user) => {
      if(search === user?.username?.toLowerCase()) {
        found = true;
        return history.push(`/profile/${user.id}`)
      }
    })
    if (found === false) history.push("/not-found");
  };

  useEffect(() => {
    // if (sessionUser) setIsLoaded(true);
    dispatch(getAllUsers()).then(() => setIsLoaded(true));
  }, [sessionUser]);

  let allUsers;
  isLoaded ? (allUsers = Object.values(users)) : (allUsers = null);

  let sessionLinks;
  if (sessionUser.user) {
    sessionLinks = (
      <>
        <NavLink id="nav-logo-link" exact to="/">
          <img
            alt="logo"
            id="nav-logo"
            src="https://brandpalettes.com/wp-content/uploads/2019/03/soundcloud_logo-300x300.png"
          ></img>
        </NavLink>
        <div id="home-link-container">
          <NavLink className="nav-link" id="home-link" exact to="/">
            Home
          </NavLink>
        </div>
        <div id="music-link-container">
          <NavLink
            className="nav-link"
            id="music-link"
            to={sessionUser.user ? `/music/${sessionUser.user.id}` : "/login"}
          >
            Music
          </NavLink>
        </div>
        <div id="library-link-container">
          <NavLink className="nav-link" id="library-link" to="/artists">
            Artists
          </NavLink>
        </div>
        <form onSubmit={onSearchSubmit}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            id="search-bar"
            className="no-outline"
            type="text"
            placeholder="Search..."
          />
        </form>
        <NavLink
          className="nav-link"
          id="upload-link"
          exact
          to={sessionUser.user ? `/upload/${sessionUser.user.id}` : "/login"}
        >
          Upload
        </NavLink>
        <div>
          <ProfileButton />
        </div>
        <LogoutButton setAuthenticated={setAuthenticated} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink id="nav-logo-link" exact to="/">
          <img
            alt="logo"
            id="nav-logo"
            src="https://brandpalettes.com/wp-content/uploads/2019/03/soundcloud_logo-300x300.png"
          ></img>
        </NavLink>
        <div id="home-link-container">
          <NavLink className="nav-link" id="home-link" exact to="/">
            Home
          </NavLink>
        </div>
        <div id="music-link-container">
          <NavLink
            className="nav-link"
            id="music-link"
            to={sessionUser.user ? `/music/${sessionUser.user.id}` : "/login"}
          >
            Music
          </NavLink>
        </div>
        <div id="library-link-container">
          <NavLink className="nav-link" id="library-link" to="/artists">
            Artists
          </NavLink>
        </div>
        <form onSubmit={onSearchSubmit}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            id="search-bar"
            className="no-outline"
            type="text"
            placeholder="Search..."
          />
        </form>
        <div id="login-button-div">
          <LoginFormModal />
        </div>
        <div id="signup-button-div">
          <SignUpFormModal />
        </div>
        <NavLink
          className="nav-link"
          id="upload-link"
          to={sessionUser.user ? `/upload/${sessionUser.user.id}` : "/login"}
        >
          Upload
        </NavLink>
      </>
    );
  }
  return (
    <div id="nav-container">
      <nav id={navId} className="nav-bar">
        {isLoaded && sessionLinks}
      </nav>
    </div>
  );
};

export default Navigation;
