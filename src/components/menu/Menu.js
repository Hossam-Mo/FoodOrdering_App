import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./menu.css";
export default function Menu() {
  const restaurant = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    console.log(restaurant);
  }, [restaurant]);

  return <div>Menu</div>;
}
