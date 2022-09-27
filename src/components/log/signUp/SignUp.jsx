import React, { useEffect } from "react";
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "../../../redux/actionTypes";
import { useNavigate } from "react-router-dom";

export default function SignUp({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  const signUpWithEmail = () => {
    if (
      validEmail.test(email) &&
      validPassword.test(password) &&
      validPhoneNumber.test(phoneNumber) &&
      validUsername.test(name)
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          updateProfile(res.user, {
            displayName: name,
            phoneNumber: phoneNumber,
          })
            .then(() => {
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

              dispatch({
                type: get_user.type,
                user: auth.currentUser,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Invalid input");
    }
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
            dispatch({
              type: get_user.type,
              user: auth.currentUser,
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
            onChange={(e) => {
              setName(e.target.value);
            }}
            regex={validUsername}
            type={"text"}
          ></Input>
          <Input
            placeholder={"Email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            regex={validEmail}
            type={"email"}
          ></Input>
          <Input
            placeholder={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            regex={validPassword}
            type={"password"}
          ></Input>
          <Input
            placeholder={"Phone"}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
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
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
