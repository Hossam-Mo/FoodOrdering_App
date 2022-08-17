import React from "react";
import "./landPage.css";

export default function LandPage() {
  return (
    <div className="landPage">
      <div className="landPage_left">
        <div className="landpage_fastDelivery">
          <p>Fast Delivery</p>
          <div>
            <img src="/assets/fastDelivery.png" alt="fast delivery" />
          </div>
        </div>

        <h1>
          The Fastest Delivery in <span> Your City</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>
        <button>Order now</button>
      </div>
      <div></div>
    </div>
  );
}
