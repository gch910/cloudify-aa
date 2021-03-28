import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../auth/LogoutButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ setAuthenticated, navId }) => {
  const sessionUser = useSelector((state) => state.user);
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (e.target.value == "hello") {
      history.push("/artists");
    }
  };

  useEffect(() => {
    if (sessionUser) setIsLoaded(true);
  }, [sessionUser]);

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
          <NavLink className="nav-link" id="library-link" to="/artists">
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
