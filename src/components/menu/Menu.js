import { collection, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import "./menu.css";
import MenuRow from "./row/MenuRow";
export default function Menu() {
  const restaurant = useSelector((state) => {
    return state.getRestaurantsList;
  });

  const [list, setList] = useState([]);
  useEffect(() => {
    console.log(restaurant);
  }, [restaurant]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  useEffect(() => {
    if (restaurant) {
      setList([]);

      const resLists = collection(db, "restaurants", restaurant.id, "Menu");
      getDocs(resLists)
        .then((res) => {
          res.docs.forEach((collec) => {
            getDocs(
              collection(
                db,
                "restaurants",
                restaurant.id,
                "Menu",
                collec.id,
                "items"
              )
            )
              .then((res) => {
                res.docs.forEach((doc) => {
                  setList((oldState) => {
                    return [
                      ...oldState,
                      {
                        collection: collec.id,
                        list: [{ ...doc.data(), id: doc.id }],
                      },
                    ];
                  });
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [restaurant]);

  return (
    <div className="menu">
      {restaurant && (
        <div className="menu_restaurant">
          <div></div>
          <img src={restaurant?.logo} alt={restaurant?.name}></img>
          <h1>{restaurant?.name}</h1>
        </div>
      )}

      {list?.map((row) => {
        return (
          <MenuRow
            key={row.collection}
            title={row.collection}
            list={row.list}
          ></MenuRow>
        );
      })}
    </div>
  );
}
