import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navigation.css";

const ProfileButton = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state) => state.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
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
      <button id="profile-button" className="no-outline" onClick={openMenu}>
        <i className="far fa-user-circle fa-3x"></i>
        {showMenu && (
          <div id="profile-dropdown-div">
            <ul style={{listStyle: "none"}}>
              <Link to={`/purchase-history/${user.user.id}`} className="profile-li">{user.user.username}</Link>
              <li className="profile-li">{user.user.email}</li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default ProfileButton;