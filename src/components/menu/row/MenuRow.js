import React, { Fragment, useRef } from "react";
import HedersLabels from "../../heders labels/HedersLabels";
import "./MenuRow.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import FoodCard from "../foodCards/FoodCard";

export default function MenuRow({ title, list, user }) {
  const ref = useRef(null);
  console.log(user);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="MenuRow">
      <div className="menuRow_title">
        <HedersLabels title={title}></HedersLabels>
        <div className="menuRow_buttons">
          {user?.type === "restaurant" && (
            <Fragment>
              <button
                className="menuRow_addButton"
                onClick={() => scroll(-300)}
              >
                <IoMdAdd />
              </button>
              <button
                className="menuRow_deleteButton"
                onClick={() => scroll(300)}
              >
                <MdDelete />
              </button>
            </Fragment>
          )}
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
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
}
