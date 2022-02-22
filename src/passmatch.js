import "./styles.css";
import React, { useState } from "react";

export default function PassMatch() {
  let [pass, setpass] = useState({ newpassword: "", confirmpassword: "" });
  let [value, setvalue] = useState("none");
  let [disable, setDisable] = useState(true);

  const confpass = (event) => {
    setpass({ ...pass, [event.target.name]: event.target.value });

    event.target.value === pass.newpassword
      ? setvalue("green")
      : setvalue("red");
    event.target.value === pass.newpassword
      ? setDisable(false)
      : setDisable(true);
  };

  const intialPassword = (event) => {
    setpass({ ...pass, [event.target.name]: event.target.value });
    console.log(pass.confirmpassword, pass.newpassword);
  };

  const logit = () => {
    console.log(pass);
  };
  return (
    <div>
      <div>Password</div>
      <input onChange={intialPassword} name="newpassword" type="text"></input>
      <input
        name="confirmpassword"
        style={{ outlineColor: value, borderColor: value }}
        type="text"
        onChange={confpass}
      ></input>
      <button disabled={disable} onClick={logit}>
        Enter
      </button>
    </div>
  );
}
