import React from "react";
import HedersLabels from "../heders labels/HedersLabels";
import LandPage from "../land page/LandPage";
import "./main.css";

export default function Main() {
  return (
    <div className="Main">
      <LandPage></LandPage>
      <HedersLabels title={"Restaurants"}></HedersLabels>
    </div>
  );
}
