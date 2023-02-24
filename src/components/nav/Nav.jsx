import React from "react";
import "./nav.css";
import { IoMdBasket, IoIosAddCircleOutline } from "react-icons/io";
import Cart from "./cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import Model from "../model/Model";
import AddRes from "./addRes/AddRes";

export default function Nav() {
  const [cartOpener, setCartOpener] = useState(false);
  const cartList = useSelector((state) => state.addToCart);
  const user = useSelector((state) => state.getUser);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const addToTheMenu = () => {
    console.log("click");
    setOpen(true);
  };

  const userSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log(res, "user is out ");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <nav className="nav">
      <Model open={open} setOpen={setOpen}>
        <AddRes />
      </Model>
      <div className="nav_logo">
        <img src="/assets/logo.png" alt="Logo"></img>
        <div>
          <p>Taste!</p>
          <p>Food service</p>
        </div>
      </div>
      <div className="nav_contant">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Menu</li>
          <li>Service</li>
        </ul>
        <div>
          {user?.type === "restaurant" ? (
            <button onClick={addToTheMenu} className="nav_resAdd">
              <IoIosAddCircleOutline />
            </button>
          ) : (
            <div
              className="nav_Icon"
              onClick={() => {
                setCartOpener(true);
              }}
            >
              {cartList.length > 0 && <div>{cartList.length}</div>}
              <IoMdBasket></IoMdBasket>
            </div>
          )}

          <Link onClick={userSignOut} to={"/login"}>
            <img
              className="nav_avatar"
              src={
                user?.photoURL || user?.type === "restaurant"
                  ? "/assets/restaurantAvatar.png"
                  : "/assets/userAvatar.png"
              }
              alt="Avatar"
            />
          </Link>
        </div>
      </div>
      <Cart
        open={cartOpener}
        setOpen={setCartOpener}
        cartList={cartList}
      ></Cart>
    </nav>
  );
}
