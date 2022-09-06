import React from "react";
import "./foodCard.css";
import { IoMdBasket } from "react-icons/io";
export default function FoodCard({ name, calories, price, img }) {
  return (
    <div className="foodCard">
      <div className="foodCard_img">
        <img src={img} alt={name}></img>
      </div>
      <div className="foodCard_content">
        <div className="foodCard_button">
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
