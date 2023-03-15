import React, { useState } from "react";
import "./addItem.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import ImageUploader from "../../imageUploader/ImageUploader";
import { useSelector } from "react-redux";

export default function AddItem({ row, setOpen }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [warning, setWarning] = useState(false);
  const user = useSelector((state) => state.getUser);

  const addItem = (url) => {
    console.log(url);
    const userCollection = collection(
      db,
      "restaurants",
      user.uid,
      "Menu",
      row,
      "items"
    );
    if (name !== "" && calories !== "" && price !== "") {
      addDoc(userCollection, {
        name,
        calories,
        price,
        img: url || "/assets/restaurantAvatar.png",
      })
        .then((res) => {
          console.log(res);
          setOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setWarning(true);
    }
  };
  return (
    <div className="addItem">
      <h1>Add item to {row} </h1>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Calories:
        <input
          value={calories}
          onChange={(e) => {
            setCalories(e.target.value);
          }}
        />
      </label>
      <label>
        Price:
        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
      </label>
      {warning && <p>Please fill all the information</p>}
      <ImageUploader uploadData={addItem}></ImageUploader>
    </div>
  );
}
