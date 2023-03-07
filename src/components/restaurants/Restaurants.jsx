import React, { useRef, useState } from "react";
import "./restaurants.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import HedersLabels from "../heders labels/HedersLabels";
import { useDispatch } from "react-redux";
import { get_restaurantsList } from "../../redux/actionTypes";
import { useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

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

  useEffect(() => {
    const restaurants = collection(db, "restaurants");

    const unSub = onSnapshot(restaurants, (res) => {
      setRestaurantsList(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });

    return unSub;
    // Firebase
    /*  const restaurant = collection(
      db,
      "restaurants",
      "AGUKv2Lx1ebfBQYoAvA4",
      "Menu",
      "Drinks",
      "items"
    );
    const unsubscribe = onSnapshot(restaurant, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      console.log(cities);
    }); */
    /*   getDocs(restaurant)
      .then((res) => {
        console.log(
          res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      }); */
  }, []);

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
              src={rest.logo}
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
