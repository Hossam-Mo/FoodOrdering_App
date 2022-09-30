import React, { useEffect, useState } from "react";
import "./log.css";
import { FcGoogle } from "react-icons/fc";
import Input from "../input/Input";
import { validEmail, validPassword } from "../../regex/regex";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { get_user } from "../../redux/actionTypes";
export default function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        getDoc(doc(db, "users", res.user.uid))
          .then((result) => {
            if (result.exists()) {
              dispatch({
                type: get_user.type,
                user: {
                  name: auth.currentUser.displayName,
                  photoURL: auth.currentUser.photoURL,
                  email: auth.currentUser.email,
                  phoneNumber: auth.currentUser.phoneNumber,
                  uid: auth.currentUser.uid,
                  location: result.data().location,
                  type: result.data().type,
                },
              });
            } else {
              setDoc(doc(db, "users", res.user.uid), {
                type: "user",
                location: false,
              })
                .then(() => {
                  dispatch({
                    type: get_user.type,
                    user: {
                      name: auth.currentUser.displayName,
                      photoURL: auth.currentUser.photoURL,
                      email: auth.currentUser.email,
                      phoneNumber: auth.currentUser.phoneNumber,
                      uid: auth.currentUser.uid,
                      location: false,
                      type: "user",
                    },
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            }
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

  const signInWithEmail = () => {
    if (validEmail.test(email) && validPassword.test(password)) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log(auth.currentUser);
          getDoc(doc(db, "users", auth.currentUser.uid))
            .then((res) => {
              dispatch({
                type: get_user.type,
                user: {
                  name: auth.currentUser.displayName,
                  photoURL: auth.currentUser.photoURL,
                  email: auth.currentUser.email,
                  phoneNumber: auth.currentUser.phoneNumber,
                  uid: auth.currentUser.uid,
                  location: res.data().location,
                  type: res.data().type,
                },
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
      alert("invalid email or password");
    }
  };
  return (
    <div className="log">
      <div className="log_center">
        <div className="log_content">
          <div className="log_welcome">
            <h1>Welcome !</h1>
            <p>Please chose the way you want to log in.</p>
            <div onClick={signInWithGoogle}>
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
            <div className="log_RememberMe">
              <div>
                <input type={"checkbox"}></input>
                <p>Remember me</p>
              </div>
              <p>Forget Password</p>
            </div>
            <button onClick={signInWithEmail} className="log_button">
              Log in
            </button>
          </div>
          <div className="log_dAcc">
            <p>
              Dont have an account?{" "}
              <span>
                <Link to={"/login/newUser"}>Sign up for free</Link>
              </span>
            </p>
          </div>
          <div className="log_dAcc">
            <p>
              Want to sign up as a restaurant?{" "}
              <span>
                <Link to={"/login/newRestaurant"}>Sign up for free</Link>
              </span>
            </p>
          </div>
        </div>

        <Link to={"/"} className="log_logo">
          <img src="/assets/logo.png" alt="Logo"></img>
          <div>
            <p>Taste!</p>
            <p>Food service</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
