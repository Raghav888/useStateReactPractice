import "./styles.css";
import React, { useState } from "react";

const add = (setsize) => {
  setsize((_size) => _size + 8);
};

const sub = (setsize) => {
  setsize((_size) => _size - 8);
};
export default function Figma() {
  let [size, setsize] = useState(8);
  return (
    <div>
      <button
        onClick={() => {
          add(setsize);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          sub(setsize);
        }}
      >
        -
      </button>
      <p>Size is {size} px</p>
      <p style={{ fontSize: size + "px" }}>Hello world</p>
    </div>
  );
}
