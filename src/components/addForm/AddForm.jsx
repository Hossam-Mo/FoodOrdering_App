import React from "react";
import ImageUploader from "../imageUploader/ImageUploader";
import "./addForm.css";

export default function AddForm({ number, handleChange, item }) {
  return (
    <div className="addForm">
      <div>
        <p>{number + 1} :</p>
        <input
          value={item.name}
          placeholder="Name"
          onChange={(e) => {
            handleChange(e, number, "name");
          }}
        ></input>
        <input
          value={item.calories}
          placeholder="Calories"
          type={"number"}
          onChange={(e) => {
            handleChange(e, number, "calories");
          }}
        ></input>
        <input
          value={item.price}
          placeholder="Price"
          type={"number"}
          onChange={(e) => {
            handleChange(e, number, "price");
          }}
        ></input>
        <ImageUploader
          imgUrl={item.img}
          handleChange={handleChange}
          number={number}
        ></ImageUploader>
      </div>
    </div>
  );
}
