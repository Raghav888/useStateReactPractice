import "./styles.css";
import React from "react";
export default function Toast(prop) {
  return (
    <div>
      <div className="snackbar">
        <p className="mssge">Can't send photo. Retry in 5 seconds.</p>
        <button onClick={prop.changeActive} className="snackbar__close">
          X
        </button>
      </div>
    </div>
  );
}
