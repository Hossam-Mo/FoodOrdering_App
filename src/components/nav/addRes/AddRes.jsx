import React, { useState } from "react";
import AddForm from "../../addForm/AddForm";
import "./addRes.css";

export default function AddRes() {
  const [row, setRow] = useState("");
  const [itemRows, setItemRows] = useState([]);

  const addItem = () => {
    setItemRows([...itemRows, itemRows.length]);
  };

  return (
    <div className="addRes">
      <div className="addRes_logo">
        <img src="/assets/logo.png" alt="Logo"></img>
        <div>
          <p>Taste!</p>
          <p>Food service</p>
        </div>
      </div>
      <h1>ADD Rows</h1>
      <input
        placeholder="Name"
        value={row}
        onChange={(e) => {
          setRow(e.target.value);
        }}
      ></input>
      <button onClick={addItem}>Add item to the row</button>

      <div className="addRes_form">
        {itemRows.map((item) => {
          return <AddForm key={item} number={item}></AddForm>;
        })}
      </div>

      <div className="addRes_OR">
        <div></div>
        <p>And</p>
        <div></div>
      </div>
      <button className="addRes_save">Save</button>
    </div>
  );
}
