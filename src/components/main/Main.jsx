import React from "react";
import HedersLabels from "../heders labels/HedersLabels";
import LandPage from "../land page/LandPage";
import Menu from "../menu/Menu";
import Restaurants from "../restaurants/Restaurants";
import "./main.css";

export default function Main() {
  return (
    <div className="Main">
      <LandPage></LandPage>

      <Restaurants></Restaurants>
      <Menu></Menu>
    </div>
  );
}
