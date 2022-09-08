import React, { useState } from "react";
import "./cart.css";
import { BiArrowBack } from "react-icons/bi";
import { BsCartX } from "react-icons/bs";
import CartBody from "./cartBody/CartBody";

export default function Cart({ open, setOpen }) {
  const [s, setS] = useState(true);
  const close = () => {
    setOpen(false);
  };
  return (
    <div className={`${open ? "cartOpen" : "cartClosed"} cart`}>
      <div className="cart_title">
        <BiArrowBack onClick={close}>back</BiArrowBack>
        <h1>Cart</h1>
        <button>
          Clear <BsCartX></BsCartX>
        </button>
      </div>
      <div className="cart_content">
        {s ? (
          <CartBody></CartBody>
        ) : (
          <div className="cart_contentEmpty">
            <img src="/assets/EmptyCart.svg"></img>
            <h2 className={`${!open && "CartClosed_empty"}`}>
              Add some items to your cart
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
