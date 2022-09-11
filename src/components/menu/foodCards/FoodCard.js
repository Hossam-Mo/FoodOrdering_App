import React from "react";
import "./foodCard.css";
import { IoMdBasket } from "react-icons/io";
import { useDispatch } from "react-redux";
import { add_toCart } from "../../../redux/actionTypes";
export default function FoodCard({ name, calories, price, img, id }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch({
      type: add_toCart.type,
      list: {
        name,
        calories,
        price,
        img,
        id,
      },
    });
  };
  return (
    <div className="foodCard">
      <div className="foodCard_img">
        <img src={img} alt={name}></img>
      </div>
      <div className="foodCard_content">
        <div onClick={addToCart} className="foodCard_button">
          <IoMdBasket></IoMdBasket>
        </div>
        <div className="foodCard_info">
          <h2>{name}</h2>
          <p>{calories} Calories</p>
          <h3>
            {price} <span>JD</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
