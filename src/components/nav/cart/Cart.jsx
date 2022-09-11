import React, { useState } from "react";
import "./cart.css";
import { BiArrowBack } from "react-icons/bi";
import { BsCartX } from "react-icons/bs";
import CartBody from "./cartBody/CartBody";
import { useDispatch } from "react-redux";
import { cart_clear } from "../../../redux/actionTypes";

export default function Cart({ open, setOpen, cartList }) {
  const dispatch = useDispatch();
  const close = () => {
    setOpen(false);
  };
  const cartClear = () => {
    dispatch({
      type: cart_clear.type,
    });
  };

  return (
    <div className={`${open ? "cartOpen" : "cartClosed"} cart`}>
      <div className="cart_title">
        <BiArrowBack onClick={close}>back</BiArrowBack>
        <h1>Cart</h1>
        <button onClick={cartClear}>
          Clear <BsCartX></BsCartX>
        </button>
      </div>
      <div className="cart_content">
        {cartList.length > 0 ? (
          <CartBody list={cartList}></CartBody>
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
