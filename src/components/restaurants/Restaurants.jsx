import React, { useRef, useState } from "react";
import "./restaurants.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import HedersLabels from "../heders labels/HedersLabels";
import { useDispatch } from "react-redux";
import { get_restaurantsList } from "../../redux/actionTypes";

export default function Restaurants() {
  const [restaurantsList, setRestaurantsList] = useState([
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
    { name: "KFC", imgUrl: "/assets/restaurants/KFC.png" },
  ]);
  const dispatch = useDispatch();

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const scrollLoop = () => {
    if (ref.current.scrollLeft > 484) {
      ref.current.scrollTo(0, 0);
    }
  };

  const ShowList = (restaurant) => {
    dispatch({
      type: get_restaurantsList,
      restaurant: restaurant,
    });
  };
  return (
    <div className="Restaurants">
      <div className="resturants_title">
        <HedersLabels title={"Restaurants"}></HedersLabels>
        <div className="resturants_buttons">
          <button onClick={() => scroll(-200)}>
            <BsArrowLeftShort />
          </button>
          <button onClick={() => scroll(200)}>
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div ref={ref} className="restaurants_contants" onScroll={scrollLoop}>
        {restaurantsList.map((rest, ind) => {
          return (
            <img
              key={ind}
              src={rest.imgUrl}
              alt={rest.name}
              onClick={() => {
                ShowList(rest);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
