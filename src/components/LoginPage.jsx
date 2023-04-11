import React, { useRef } from "react";
import { Link } from "react-router-dom";
import loginPageImg from "../assets/loginPage.png";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((credential) => {
        // console.log(credential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((credential) => {
        console.log(credential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="loginPage">
      <img src={loginPageImg} className="loginScreen__logo" alt="image" />
      <div className="loginPage__Container">
        <h2 className="loginPage__heading">Great to have you here!</h2>
        <h4 className="loginPage__text">
          You can login to access your workspace.
        </h4>
        <div className="externalLogins"></div>
        <div></div>
        <div className="form">
          <form>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="Password" placeholder="Password" />
            <button type="submit" onClick={login}>
              Login
            </button>
            <a href="#">Login with SSO</a>
            <Link to="/forgot-password">Forgot password ? </Link>
            <h4>
              <span className="signupScreen__gray">No account yet? </span>
              <span className="signupScreen__link" onClick={register}>
                Sign up
              </span>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
