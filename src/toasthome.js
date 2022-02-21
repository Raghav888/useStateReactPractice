import "./styles.css";
import React, { useState } from "react";
import Toast from "./toast";
export default function ToastHome() {
  let [active, setactive] = useState(false);
  let [showbutton, buttonstatus] = useState(true);
  let [showtoast, toastsetter] = useState("");
  const makeActive = () => {
    setactive(true);
    buttonstatus(false);
  };

  const makeDeactive = () => {
    setactive(false);
    buttonstatus(true);
  };
  return (
    <div>
      {" "}
      {showbutton && (
        <button
          onClick={() => {
            toastsetter("green");
            makeActive();
          }}
        >
          Success
        </button>
      )}
      {showbutton && (
        <button
          onClick={() => {
            toastsetter("black");
            makeActive();
          }}
        >
          Failure
        </button>
      )}
      {showbutton && (
        <button
          onClick={() => {
            toastsetter("red");
            makeActive();
          }}
        >
          Error
        </button>
      )}
      {active && showtoast === "green" && (
        <Toast changeActive={makeDeactive} toastcolor={showtoast} />
      )}
      {active && showtoast === "black" && (
        <Toast changeActive={makeDeactive} toastcolor={showtoast} />
      )}
      {active && showtoast === "red" && (
        <Toast changeActive={makeDeactive} toastcolor={showtoast} />
      )}
    </div>
  );
}
