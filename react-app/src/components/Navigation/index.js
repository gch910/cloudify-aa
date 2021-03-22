import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import sessionReducer, { restoreUser } from "../../store/session";
import LogoutButton from "../auth/LogoutButton";
import "./Navigation.css";

const Navigation = ({ setAuthenticated }) => {
  const sessionUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);

  // useEffect(() => {
  //   dispatch(restoreUser()).then((req) => setIsLoaded(true));
  // }, [dispatch]);

  let sessionLinks;
  if (sessionUser.user) {
    sessionLinks = (
      <>
        <NavLink className="nav-link" id="home-link" exact to="/">
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          id="music-link"
          exact
          to={`/${sessionUser.id}/music`}
        >
          Music
        </NavLink>
        <p>hello</p>
        <NavLink
          className="nav-link"
          id="upload-link"
          exact
          to={`/${sessionUser.id}/upload`}
        >
          Upload
        </NavLink>
        {/* <NavLink>Profile</NavLink> */}
        <LogoutButton setAuthenticated={setAuthenticated} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-link" id="home-link" exact to="/">
          Home
        </NavLink>
        <NavLink
          className="nav-link"
          id="music-link"
          to={`/${sessionUser.id}/music`}
        >
          Music
        </NavLink>
        <h1>SearchBar</h1>
        <NavLink
          className="nav-link"
          id="upload-link"
          to={`/${sessionUser.id}/upload`}
        >
          Upload
        </NavLink>
        <h1>Sign In</h1>
        <h1>Create Account</h1>
      </>
    );
  }
  return (
    // <div id="nav-container">
    <nav>{isLoaded && sessionLinks}</nav>
    // </div>
  );
};

export default Navigation;
