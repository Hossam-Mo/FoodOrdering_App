import React from "react";
import "./hedarsLabels.css";

export default function HedersLabels({ title }) {
  return (
    <div className="HedersLabels">
      <h1>{title}</h1>
      <div className="HedersLabels_line"></div>
    </div>
  );
}
