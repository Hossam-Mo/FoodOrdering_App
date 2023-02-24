import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth, db } from "../../../firebase";
import AddForm from "../../addForm/AddForm";
import "./addRes.css";

export default function AddRes() {
  const [row, setRow] = useState("");
  const [itemRows, setItemRows] = useState([]);
  const user = useSelector((state) => state.getUser);

  const addItem = () => {
    setItemRows([...itemRows, { name: "", price: "", calories: "" }]);
  };
  const handleFromChange = (e, ind, property) => {
    const arr = itemRows.slice();
    arr[ind][property] = e.target.value;
    setItemRows(arr);
  };

  useEffect(() => {
    console.log(itemRows);
  }, [itemRows]);

  const saveItem = () => {
    setDoc(doc(db, "restaurants", user?.uid), {
      location: true,
      name: auth.currentUser.displayName,
      logo: auth.currentUser.photoURL,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setDoc(doc(db, "restaurants", user?.uid, "Menu", row), {
      test: true,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
        {itemRows.map((item, ind) => {
          return (
            <AddForm
              key={ind}
              number={ind}
              handleChange={handleFromChange}
              item={item}
            ></AddForm>
          );
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
