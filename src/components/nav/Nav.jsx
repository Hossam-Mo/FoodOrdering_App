import React from "react";
import "./nav.css";
import { IoMdBasket } from "react-icons/io";

export default function Nav() {
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
          <IoMdBasket></IoMdBasket>
          <img
            className="nav_avatar"
            src="/assets/userAvatar.png"
            alt="Avatar"
          />
        </div>
      </div>
    </nav>
  );
}
