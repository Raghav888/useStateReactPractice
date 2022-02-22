import "./styles.css";
import React, { useState } from "react";
import Toast from "./toast";
export default function ToastHome() {
  let [active, setactive] = useState(false);

  let [showtoast, toastsetter] = useState("");
  const makeActive = () => {
    setactive(true);
  };

  const makeDeactive = () => {
    setactive(false);
  };
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          toastsetter("green");
          makeActive();
        }}
      >
        Success
      </button>
      <button
        onClick={() => {
          toastsetter("black");
          makeActive();
        }}
      >
        Failure
      </button>
      <button
        onClick={() => {
          toastsetter("red");
          makeActive();
        }}
      >
        Error
      </button>
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
