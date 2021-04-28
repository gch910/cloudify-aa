import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import SignUpFormModal from "../SignUpFormModal";
import { loginUser } from "../../store/session";
import "./LoginForm.css";

const LoginForm = ({ authenticated }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const history = useHistory();

  const loginDemo = async (e) => {
    e.preventDefault();
    await dispatch(loginUser("Alabama Shakes@cloudify.com", "password"));
  };

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
    <div id="login-div">
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
        <button
          onClick={loginDemo}
          id="signup-button"
          style={{ marginBottom: "20px" }}
        >
          Demo
        </button>
        <div id="signup-modal-div">
          <SignUpFormModal />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
