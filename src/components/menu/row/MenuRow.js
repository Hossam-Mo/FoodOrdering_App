import React, { useRef } from "react";
import HedersLabels from "../../heders labels/HedersLabels";
import "./MenuRow.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import FoodCard from "../foodCards/FoodCard";

export default function MenuRow({ title, list }) {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="MenuRow">
      <div className="menuRow_title">
        <HedersLabels title={title}></HedersLabels>
        <div className="menuRow_buttons">
          <button onClick={() => scroll(-300)}>
            <BsArrowLeftShort />
          </button>
          <button onClick={() => scroll(300)}>
            <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div className="menuRow_cards" ref={ref}>
        {list.map((item, ind) => {
          return (
            <FoodCard
              id={item.id}
              calories={item.calories}
              name={item.name}
              img={item.img}
              price={item.price}
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
}
