import React from "react";
import { useSelector } from "react-redux";
import LandPage from "../land page/LandPage";
import Menu from "../menu/Menu";
import Restaurants from "../restaurants/Restaurants";
import "./main.css";

export default function Main() {
  const user = useSelector((state) => state.getUser);
  return (
    <div className="Main">
      <LandPage></LandPage>
      {user?.type !== "restaurant" && <Restaurants></Restaurants>}

      <Menu></Menu>
    </div>
  );
}
