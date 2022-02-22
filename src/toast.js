import "./styles.css";
import React from "react";

const item = [
  { name: "black", des: "Can't send photo. Retry in 5 seconds" },
  { name: "green", des: "Successfully saved" },
  { name: "red", des: "Its a warining" }
];
export default function Toast(prop) {
  return (
    <div>
      <div style={{ backgroundColor: prop.toastcolor }} className="snackbar">
        {item.map((data) =>
          data.name === prop.toastcolor ? (
            <p className="mssge">{data.des}</p>
          ) : null
        )}

        <button
          onClick={prop.changeActive}
          style={{ backgroundColor: prop.toastcolor }}
          className="snackbar__close"
        >
          X
        </button>
      </div>
      )
    </div>
  );
}
