import React from "react";
import "./signUp.css";
import { FcGoogle } from "react-icons/fc";
import { validEmail, validPassword } from "../../../regex/regex";
import Input from "../../input/Input";

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp_center">
        <div className="signUp_title">
          <h1>Sign up as a user</h1>
        </div>{" "}
        <div className="signUp_OR">
          <div></div>
          <p>Google</p>
          <div></div>
        </div>
        <div className="signUp_google">
          <FcGoogle></FcGoogle>
          log in with google
        </div>
        <div className="signUp_OR">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="signUp_form">
          <Input
            placeholder={"Name"}
            onChange={() => {}}
            regex={validEmail}
            type={"text"}
          ></Input>
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
          <Input
            placeholder={"Phone"}
            onChange={() => {}}
            regex={validEmail}
            type={"password"}
          ></Input>

          <div className="signUp_terms">
            <div>
              <input type={"checkbox"}></input>
              <p>
                I agree with <span>Terms</span> and <span>Privacy</span>
              </p>
            </div>
          </div>
          <button className="signUp_button"> Log in</button>
        </div>
      </div>
    </div>
  );
}
