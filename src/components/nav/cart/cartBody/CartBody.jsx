import React from "react";
import { useState } from "react";
import "./cartBody.css";

export default function CartBody() {
  const [item, setItem] = useState([
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
    {
      img: "/assets/food/iceCream.png",
      title: "Ice Cream",
      price: "3.50",
    },
  ]);

  return (
    <div className="cartBody">
      <div className="cartBody_content">
        {item.map((it, ind) => {
          return (
            <div className="cartBody_item">
              <div className="cartBody_info">
                <img src={it.img} alt={it.title}></img>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.price} JD</p>
                </div>
              </div>
              <div className="cartBody_counter">
                <button>-</button>
                <p>1</p>
                <button>+</button>
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
        <button>Cheak Out</button>
      </div>
    </div>
  );
}
