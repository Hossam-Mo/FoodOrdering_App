import React from "react";
import "./addForm.css";

export default function AddForm({ number }) {
  return (
    <div className="addForm">
      <div>
        <p>{number} :</p>
        <input placeholder="Name"></input>
        <input placeholder="calories" type={"number"}></input>
        <input placeholder="Price" type={"number"}></input>
      </div>
    </div>
  );
}
