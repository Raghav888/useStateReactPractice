import "./styles.css";
import React, { useState } from "react";

export default function PassHide() {
  let [typeoftext, typesetter] = useState("password");
  let [buttontext, buttonsetter] = useState("Show Password");
  const buttoncheck = () => {
    typeoftext === "password" ? typesetter("text") : typesetter("password");
    buttontext === "Show Password"
      ? buttonsetter("Hide Pass")
      : buttonsetter("Show Password");
  };
  return (
    <div>
      {" "}
      <input type={typeoftext}></input>
      <button onClick={buttoncheck}>{buttontext}</button>
      <hr />
    </div>
  );
}
