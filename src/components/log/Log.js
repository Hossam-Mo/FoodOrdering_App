import React from "react";
import "./log.css";
import { FcGoogle } from "react-icons/fc";
import Input from "../input/Input";
import { validEmail, validPassword } from "../../regex/regex";

export default function Log() {
  return (
    <div className="log">
      <div className="log_center">
        <div className="log_content">
          <div className="log_welcome">
            <h1>Welcome !</h1>
            <p>Please chose the way you want to log in.</p>
            <div>
              <FcGoogle></FcGoogle>
              log in with google
            </div>
          </div>
          <div className="log_OR">
            <div></div>
            <p>OR</p>
            <div></div>
          </div>
          <div className="log_form">
            <Input
              placeholder={"Email"}
              onChange={() => {}}
              regex={validEmail}
              type={"email"}
            ></Input>
            <Input
              placeholder={"Password"}
              onChange={() => {}}
              regex={validPassword}
              type={"password"}
            ></Input>
            <div className="log_RememberMe">
              <div>
                <input type={"checkbox"}></input>
                <p>Remember me</p>
              </div>
              <p>Forget Password</p>
            </div>
            <button className="log_button"> Log in</button>
          </div>
          <div className="log_dAcc">
            <p>
              Dont have an account? <span>Sign up for free</span>
            </p>
          </div>
          <div className="log_dAcc">
            <p>
              Want to sign up as a restaurant? <span>Sign up for free</span>
            </p>
          </div>
        </div>
        <div className="log_logo">
          <img src="/assets/logo.png" alt="Logo"></img>
          <div>
            <p>Taste!</p>
            <p>Food service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
