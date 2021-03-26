import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ setAuthenticated, navId }) => {
  const sessionUser = useSelector((state) => state.user);

  const [isLoaded, setIsLoaded] = useState(true);

  let sessionLinks;
  if (sessionUser.user) {
    sessionLinks = (
      <>
        <img
          alt="logo"
          id="nav-logo"
          src="https://brandpalettes.com/wp-content/uploads/2019/03/soundcloud_logo-300x300.png"
        ></img>
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
          <NavLink
            className="nav-link"
            id="library-link"
            to="/artists"
          >
            Artists
          </NavLink>
        </div>
        <input
          id="search-bar"
          className="no-outline"
          type="text"
          placeholder="Search..."
        />
        <NavLink
          className="nav-link"
          id="upload-link"
          exact
          to={sessionUser.user ? `/upload/${sessionUser.user.id}` : "/login"}
        >
          Upload
        </NavLink>
        <ProfileButton />
        <LogoutButton setAuthenticated={setAuthenticated} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <img
          alt="logo"
          id="nav-logo"
          src="https://brandpalettes.com/wp-content/uploads/2019/03/soundcloud_logo-300x300.png"
        ></img>
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
          <NavLink
            className="nav-link"
            id="library-link"
            to="/artists"
          >
            Artists
          </NavLink>
        </div>
        <input
          id="search-bar"
          className="no-outline"
          type="text"
          placeholder="Search..."
        />
        <div id="login-button-div">
          <LoginFormModal />
        </div>
        <SignUpFormModal />
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
    // <div id="nav-container">
    <nav id={navId} className="nav-bar">
      {isLoaded && sessionLinks}
    </nav>
    // </div>
  );
};

export default Navigation;
