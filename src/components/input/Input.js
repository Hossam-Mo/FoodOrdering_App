import React, { useEffect, useState } from "react";
import "./input.css";

export default function Input({ placeholder, onChange }) {
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    console.log(inputValue);
    if (inputValue === "") {
    }
  }, [inputValue]);

  return (
    <div className="input">
      <input
        onChange={(e) => {
          onChange(e);
          setInputValue(e.target.value);
        }}
      ></input>
      <p className={`${inputValue != null && inputValue != "" && "input_P"}`}>
        {placeholder}
      </p>
      <div></div>
    </div>
  );
}
