import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FoodCard from "./foodCards/FoodCard";
import "./menu.css";
import MenuRow from "./row/MenuRow";
export default function Menu() {
  const restaurant = useSelector((state) => {
    return state.getRestaurantsList;
  });

  const [list, setList] = useState([
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
    {
      name: "Fanta",
      img: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-c2ed6.appspot.com/o/Images%2F1648182367552-d6.png?alt=media&token=d6e5479a-9a94-4633-bbbb-248fef5da280",
      calories: 45,
      price: 0.5,
    },
  ]);
  useEffect(() => {
    console.log(restaurant);
  }, [restaurant]);

  return (
    <div className="menu">
      <div className="menu_restaurant">
        <img src={restaurant.imgUrl} alt={restaurant.name}></img>
      </div>
      <MenuRow title={"Drinks"} list={list}></MenuRow>
    </div>
  );
}
