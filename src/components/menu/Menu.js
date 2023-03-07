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
  const user = useSelector((state) => state.getUser);

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  useEffect(() => {
    console.log(restaurant);

    if (restaurant && user?.type !== "restaurant") {
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
    // get the calac that the restaurannt have
    if (user?.type === "restaurant") {
      setList([]);

      const resLists = collection(db, "restaurants", user.uid, "Menu");
      getDocs(resLists)
        .then((res) => {
          res.docs.forEach((collec) => {
            getDocs(
              collection(
                db,
                "restaurants",
                user.uid,
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
  }, [restaurant, user]);

  return (
    <div className="menu">
      {restaurant && user?.type !== "restaurant" && (
        <div className="menu_restaurant">
          <div></div>
          <img src={restaurant?.logo} alt={restaurant?.name}></img>
          <h1>{restaurant?.name}</h1>
        </div>
      )}
      {user?.type === "restaurant" && (
        <div className="menu_restaurant">
          <div></div>
          <img
            src={user?.photoURL || "/assets/restaurantAvatar.png"}
            alt={user?.name}
          ></img>
          <h1>{user?.name}</h1>
        </div>
      )}
      {list?.map((row, ind) => {
        return (
          <MenuRow key={ind} title={row.collection} list={row.list}></MenuRow>
        );
      })}
    </div>
  );
}
