import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import SignUpFormModal from "../SignUpFormModal";
import { loginUser } from "../../store/session";
import "./LoginFormPage.css";

const LoginFormPage = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    setFormErrors([]);
    await dispatch(loginUser(email, password)).then((res) => {
      if (res?.errors) {
        setFormErrors(res.errors);
        return res.errors;
      } else {
        return history.push("/");
      }
    });
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
    <div id="login-page-div">
      <form className="login-page" onSubmit={onLogin}>
        <div>
          {formErrors.map((error) => (
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

export default LoginFormPage;