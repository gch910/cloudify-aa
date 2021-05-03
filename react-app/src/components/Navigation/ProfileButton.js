import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navigation.css";

const ProfileButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.user);

  const openMenu = (e) => {
    if (showMenu) return;

    
    setShowMenu(true);
    e.target.classList.remove("fas")
   
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      setShowMenu(false);
      // e.target.classList.add("fa-user-alt")
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  //   const userLogout = (e) => {
  //     e.preventDefault();
  //     dispatch(logout());
  //   };

  return (
    <>
      <button id="profile-button" className="no-outline" onClick={(e) => openMenu(e)}>
      <i className="fas fa-user-alt fa-x3"></i>
        {showMenu && (
          <div id="profile-dropdown-div">
            <ul style={{ listStyle: "none" }}>
              <Link
                to={`/profile/${user.user.id}`}
                className="profile-li"
                id="my-profile-link"
              >
                My Profile
              </Link>
              {/* <li className="profile-li">{user.user.email}</li> */}
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default ProfileButton;
