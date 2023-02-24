import React from "react";
import "./addForm.css";

export default function AddForm() {
  return (
    <div className="addForm">
      <div>
        <p>1 :</p>
        <input placeholder="Name"></input>
        <input placeholder="calories"></input>
        <input placeholder="Price" type={"number"}></input>
      </div>
    </div>
  );
}
