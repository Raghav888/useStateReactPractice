import "./styles.css";
import React, { useState } from "react";

export default function Twitter() {
  let [count, setcount] = useState("none");
  let [messgCount, messgcount] = useState(0);
  const countSize = (event) => {
    event.target.value.length > 2 ? setcount("red") : setcount("black");
    messgcount(event.target.value.length);
  };
  return (
    <div>
      <div>Twitter</div>
      <input
        style={{ outlineColor: count }}
        onChange={countSize}
        type="text"
      ></input>
      <p style={{ color: count }}>{messgCount}</p>
      <hr />
    </div>
  );
}
