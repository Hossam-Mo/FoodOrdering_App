import React from "react";
import "./landingFood.css";

export default function LandingFood({ imgUrl, title, descrption, price }) {
  return (
    <div className="LandingFood">
      <img src={imgUrl} alt={title} />

      <div className="LandingFood_contants">
        <h1>{title}</h1>
        <h2>{descrption}</h2>
        <p>
          {price} <span className="landingFood_span">JD</span>
        </p>
      </div>
    </div>
  );
}
