import "./styles.css";
import React, { useState } from "react";

const changecolor = (
  btncolor,
  btncolorsetter,
  color,
  colorsetter,
  textcolor,
  textsetter
) => {
  btncolor === "Darkmode"
    ? btncolorsetter("Whitemode")
    : btncolorsetter("Darkmode");
  color === "black" ? colorsetter("") : colorsetter("black");
  textcolor === "black" ? textsetter("white") : textsetter("black");
};
export default function DarkMode() {
  let [color, colorsetter] = useState("");
  let [btncolor, btncolorsetter] = useState("Darkmode");
  let [textcolor, textsetter] = useState("black");
  return (
    <div className="main" style={{ backgroundColor: color }}>
      <p style={{ color: textcolor }}>hELLO WORLD</p>
      <button
        style={{ color: textcolor }}
        onClick={() =>
          changecolor(
            btncolor,
            btncolorsetter,
            color,
            colorsetter,
            textcolor,
            textsetter
          )
        }
      >
        {btncolor}
      </button>
    </div>
  );
}
