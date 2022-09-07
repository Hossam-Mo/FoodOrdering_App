import React from "react";
import "./nav.css";
import { IoMdBasket } from "react-icons/io";
import Cart from "./cart/Cart";
import { useState } from "react";

export default function Nav() {
  const [cartOpener, setCartOpener] = useState(false);
  return (
    <nav className="nav">
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
          <IoMdBasket
            onClick={() => {
              setCartOpener(true);
            }}
          ></IoMdBasket>
          <img
            className="nav_avatar"
            src="/assets/userAvatar.png"
            alt="Avatar"
          />
        </div>
      </div>
      <Cart open={cartOpener} setOpen={setCartOpener}></Cart>
    </nav>
  );
}
