import "./styles.css";
import React, { useState } from "react";

export default function PassAlpha() {
  let [password, setpassword] = useState("");
  const passCheck = (event) => {
    let reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    console.log(reg.test(event.target.value));
    reg.test(event.target.value) ? setpassword("black") : setpassword("red");
  };

  return (
    <div>
      <div>Password Alphanumeric</div>
      <input
        type="text"
        style={{ outlineColor: password }}
        onChange={passCheck}
      ></input>
    </div>
  );
}
