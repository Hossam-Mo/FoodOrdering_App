import React from "react";
import LandingFood from "./LandingFood";
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
          Experience the convenience of online food ordering with our
          easy-to-use website. Browse menus from top-rated restaurants in your
          area, customize your order to your liking, and pay online with ease.
          With real-time order tracking and speedy delivery, you can sit back
          and relax while we bring your favorite food right to your doorstep
        </p>
        <button>Order now</button>
      </div>
      <div className="landPage_right">
        <img src="/assets/mainBackground.png" alt="background"></img>
        <LandingFood
          imgUrl={"/assets/food/iceCream.png"}
          title={"Icecream"}
          descrption={"Chocolate & vanilla"}
          price={"3.50"}
        ></LandingFood>
        <LandingFood
          imgUrl={"/assets/food/ChickenBet.png"}
          title={"Chicken Bet"}
          descrption={"Chicken Bet plate"}
          price={"4.25"}
        ></LandingFood>
        <LandingFood
          imgUrl={"/assets/food/manjoorion.png"}
          title={"Manjoorion"}
          descrption={"Manjoorion plate"}
          price={"2.75"}
        ></LandingFood>
        <LandingFood
          imgUrl={"/assets/food/chickenkebab.png"}
          title={"Chicken Kebab"}
          descrption={"Mixed Kebab plate"}
          price={"5.00"}
        ></LandingFood>
      </div>
    </div>
  );
}
