import React from "react";
import "./log.css";
import { FcGoogle } from "react-icons/fc";
import Input from "../input/Input";

export default function Log() {
  return (
    <div className="log">
      <div className="log_center">
        <div className="log_content">
          <div className="log_welcome">
            <h1>Welcome</h1>
            <p>Please enter your details.</p>
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
            <Input placeholder={"Email"} onChange={() => {}}></Input>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
