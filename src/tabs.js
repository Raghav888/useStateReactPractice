import "./styles.css";
import React, { useState } from "react";
import Home from "./home";
export default function Tab() {
  let [comp, setcomp] = useState("Home");
  return (
    <div>
      {" "}
      <button onClick={() => setcomp("Home")}>Home</button>
      <button onClick={() => setcomp("Profile")}>Profile</button>
      <button onClick={() => setcomp("About")}>About</button>
      {comp === "Home" && <Home value={comp} />}
      {comp === "Profile" && <Home value={comp} />}
      {comp === "About" && <Home value={comp} />}
    </div>
  );
}
