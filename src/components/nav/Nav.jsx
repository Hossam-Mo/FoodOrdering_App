import React from "react";
import "./nav.css";
import { IoMdBasket } from "react-icons/io";
import Cart from "./cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {
  const [cartOpener, setCartOpener] = useState(false);
  const cartList = useSelector((state) => state.addToCart);
  const user = useSelector((state) => state.getUser);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <nav className="nav">
      <div className="nav_logo">
        <img src={user?.photoURL || "/assets/logo.png"} alt="Logo"></img>
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
          <div
            className="nav_Icon"
            onClick={() => {
              setCartOpener(true);
            }}
          >
            {cartList.length > 0 && <div>{cartList.length}</div>}
            <IoMdBasket></IoMdBasket>
          </div>

          <Link to={"/login"}>
            <img
              className="nav_avatar"
              src="/assets/userAvatar.png"
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
