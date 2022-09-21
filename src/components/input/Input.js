import React, { useEffect, useState } from "react";
import "./input.css";
import { BiErrorCircle } from "react-icons/bi";

export default function Input({ placeholder, onChange, regex }) {
  const [inputValue, setInputValue] = useState(null);
  const [regError, setRegError] = useState(false);

  const regexCheck = () => {
    setRegError(false);
    if (!regex.test(inputValue)) {
      setRegError(true);
    } else {
      setRegError(false);
    }
  };

  return (
    <div className={`input ${regError && "input_invalid"}`}>
      <input
        onBlur={regexCheck}
        onChange={(e) => {
          onChange(e);
          setInputValue(e.target.value);
        }}
      ></input>
      <p className={`${inputValue !== null && inputValue !== "" && "input_P"}`}>
        {placeholder}
      </p>
      <div className="input_invIcon">
        <BiErrorCircle></BiErrorCircle>
        <div>Invalid {placeholder}</div>
      </div>

      <div className="input_bottomLine"></div>
    </div>
  );
}
