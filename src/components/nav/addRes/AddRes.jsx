import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth, db } from "../../../firebase";
import AddForm from "../../addForm/AddForm";
import "./addRes.css";

export default function AddRes({ setModelOpen }) {
  const [row, setRow] = useState("");
  const [itemRows, setItemRows] = useState([]);
  const [warning, setWarning] = useState(false);
  const user = useSelector((state) => state.getUser);

  const addItem = () => {
    setItemRows([...itemRows, { name: "", price: "", calories: "", img: "" }]);
  };
  const handleFromChange = (e, ind, property) => {
    const arr = itemRows.slice();
    if (property === "img") arr[ind][property] = e;
    if (property !== "img") arr[ind][property] = e.target.value;
    setItemRows(arr);
  };

  useEffect(() => {
    console.log(itemRows);
  }, [itemRows]);

  const saveItem = () => {
    if (row !== "") {
      /* setDoc(doc(db, "restaurants", user?.uid), {
        location: true,
        name: auth.currentUser.displayName,
        logo: auth.currentUser.photoURL,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        }); */

      if (itemRows.length === 0) {
        setWarning("Row needs to have at least 1 item");
      } else {
        setDoc(
          doc(
            db,
            "restaurants",
            user?.uid,
            "Menu",
            row.charAt(0).toUpperCase() + row.slice(1)
          ),
          {
            name: row,
          }
        )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            alert(err);
          });

        itemRows.forEach((item) => {
          addDoc(
            collection(
              db,
              "restaurants",
              user?.uid,
              "Menu",
              row.charAt(0).toUpperCase() + row.slice(1),
              "items"
            ),
            {
              name: item.name,
              price: item.price,
              calories: item.calories,
              img: item.img || "/assets/restaurantAvatar.png",
            }
          )
            .then((res) => {
              console.log(res);
              setModelOpen(false);
            })
            .catch((err) => {
              alert(err);
            });
        });
      }
    } else {
      setWarning("Row name cannot be empty");
    }
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
      {warning && <p className="addRes_warning">{warning}</p>}

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
      <button onClick={saveItem} className="addRes_save">
        Save
      </button>
    </div>
  );
}
