import "./styles.css";
import React from "react";
import DarkMode from "./darkmode";
import Figma from "./figma";
import Like from "./like";
import AddtoCart from "./addtocart";
import Card from "./card";
import Twitter from "./twitter";
import PassAlpha from "./passwordalp";
import PassHide from "./passhide";
import Tab from "./tabs";
import ToastHome from "./toasthome";
import PassMatch from "./passmatch";

export default function App() {
  return (
    <div>
      <PassMatch />
      <hr />
      <Twitter />
      <PassAlpha />
      <hr />
      <PassHide />
      <Tab />
      <hr />
      <DarkMode />
      <hr />
      <Figma />
      <hr />
      <ToastHome />
      <hr />
      <Like />
      <hr />
      <AddtoCart />
      <hr />
      <Card />
    </div>
  );
}
