import "./styles.css";
import React from "react";
export default function Toast(prop) {
  return (
    <div>
      {prop.toastcolor === "black" && (
        <div style={{ backgroundColor: prop.toastcolor }} className="snackbar">
          <p className="mssge">Can't send photo. Retry in 5 seconds.</p>
          <button
            onClick={prop.changeActive}
            style={{ backgroundColor: prop.toastcolor }}
            className="snackbar__close"
          >
            X
          </button>
        </div>
      )}

      {prop.toastcolor === "green" && (
        <div style={{ backgroundColor: prop.toastcolor }} className="snackbar">
          <p className="mssge">Saved successfully.</p>
          <button
            onClick={prop.changeActive}
            style={{ backgroundColor: prop.toastcolor }}
            className="snackbar__close"
          >
            X
          </button>
        </div>
      )}

      {prop.toastcolor === "red" && (
        <div style={{ backgroundColor: prop.toastcolor }} className="snackbar">
          <p className="mssge">Its error 404. Retry in 5 seconds.</p>
          <button
            onClick={prop.changeActive}
            style={{ backgroundColor: prop.toastcolor }}
            className="snackbar__close"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}
