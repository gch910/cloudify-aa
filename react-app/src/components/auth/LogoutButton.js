import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/session";

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logoutUser());
    setAuthenticated(false);
  };

  return (
    <button id="logout-button" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
