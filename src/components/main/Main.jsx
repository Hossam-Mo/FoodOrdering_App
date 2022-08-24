import React from "react";
import HedersLabels from "../heders labels/HedersLabels";
import LandPage from "../land page/LandPage";
import Restaurants from "../restaurants/Restaurants";
import "./main.css";

export default function Main() {
  return (
    <div className="Main">
      <LandPage></LandPage>

      <Restaurants></Restaurants>
    </div>
  );
}
