import React from "react";
import { useDispatch } from "react-redux";
import {
  cart_itemDelete,
  decrease_cart_count,
  increase_cart_count,
} from "../../../../redux/actionTypes";
import "./cartBody.css";

export default function CartBody({ list }) {
  const dispatch = useDispatch();

  const increseItemCount = (id) => {
    dispatch({
      type: increase_cart_count.type,
      id,
    });
  };
  const DecreseItemCount = (id, count) => {
    count === 1
      ? dispatch({
          type: cart_itemDelete.type,
          id,
        })
      : dispatch({
          type: decrease_cart_count.type,
          id,
        });
  };

  return (
    <div className="cartBody">
      <div className="cartBody_content">
        {list?.map((it, ind) => {
          return (
            <div key={ind} className="cartBody_item">
              <div className="cartBody_info">
                <img src={it.img} alt={it.name}></img>
                <div>
                  <h3>{it.name}</h3>
                  <p>{it.price} JD</p>
                </div>
              </div>
              <div className="cartBody_counter">
                <button
                  onClick={() => {
                    DecreseItemCount(it.id, it.count);
                  }}
                >
                  -
                </button>
                <p>{it.count}</p>
                <button
                  onClick={() => {
                    increseItemCount(it.id);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cartBody_bill">
        <div>
          <p>Sub Total</p>
          <p>324 JD</p>
        </div>
        <div>
          <p>Delivery</p>
          <p>2 JD</p>
        </div>
        <div className="cartBody_line"></div>
        <div>
          <p>Total</p>
          <p>326 JD</p>
        </div>
        <button>Check Out</button>
      </div>
    </div>
  );
}
