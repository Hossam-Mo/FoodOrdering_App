import React from "react";
import "./model.css";

export default function Model({ open, setOpen, children }) {
  return (
    open && (
      <div className="model">
        <div className="model_main">{children}</div>
        <div
          onClick={() => {
            setOpen(false);
          }}
          className="model_background"
        ></div>
      </div>
    )
  );
}
