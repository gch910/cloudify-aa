import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import SignUpFormModal from "../SignUpFormModal";
import { loginUser } from "../../store/session";
import "./LoginForm.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(email, password));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div id="login-div">
      <form className="login-page" onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <h1 id="login-form-h1">Log In</h1>
          {/* <label htmlFor="email">Email</label> */}
          <input
            id="login-form-email"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          {/* <label htmlFor="password">Password</label> */}
          <input
            id="login-form-password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button id="login-submit-button" type="submit">
          Login
        </button>
        <div id="signup-modal-div">
          <SignUpFormModal />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
