import React from "react";
import "./signUp.css";
import { FcGoogle } from "react-icons/fc";
import {
  validEmail,
  validPassword,
  validPhoneNumber,
  validUsername,
} from "../../../regex/regex";
import Input from "../../input/Input";
import { auth, db, googleProvider } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function SignUp({ type }) {
  useEffect(() => {
    console.log(auth.currentUser);
  }, [auth.currentUser]);

  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(auth, "ahmadhosamhqb@gmail.com", "asddxyz")
      .then((res) => {
        updateProfile(res.user, {
          displayName: "hossam",
          phoneNumber: "0792659671",
        })
          .then(() => {
            console.log(auth.currentUser);

            setDoc(doc(db, "users", res.user.uid), {
              location: type === "restaurant" ? true : false,
              type: type,
            })
              .then(() => {
                console.log("secc");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setDoc(doc(db, "users", res.user.uid), {
          location: type === "restaurant" ? true : false,
          type: type,
        })
          .then(() => {
            console.log("secc");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signUp">
      <div className="signUp_center">
        <div className="signUp_title">
          <h1>Sign up as a {type}</h1>
        </div>
        <div className="signUp_OR">
          <div></div>
          <p>Google</p>
          <div></div>
        </div>
        <div onClick={signUpWithGoogle} className="signUp_google">
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
            placeholder={`${type === "restaurant" ? "Resturant" : "Name"}`}
            onChange={() => {}}
            regex={validUsername}
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
            regex={validPhoneNumber}
            type={"number"}
          ></Input>
          {type === "restaurant" && (
            <Input
              placeholder={"Location"}
              onChange={() => {}}
              regex={validPhoneNumber}
              type={"text"}
            ></Input>
          )}
          <div className="signUp_terms">
            <div>
              <input type={"checkbox"}></input>
              <p>
                I agree with <span>Terms</span> and <span>Privacy</span>
              </p>
            </div>
          </div>
          <button className="signUp_button" onClick={signUpWithEmail}>
            {" "}
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
