import "./styles.css";
import React from "react";

let items = [
  {
    name: "Mobile",
    description: "Smartphone",
    price: "3000",
    original: "4000",
    outOfStock: false
  },
  {
    name: "Mobile 2",
    description: "Smartphone adv",
    price: "5000",
    original: "8000",
    outOfStock: true
  }
];
export default function Card() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://mantraui.netlify.app/component/component.css"
      ></link>
      {items.map((data) => (
        <div class="mantra-vertical-card mantra-text-overlay-card ">
          <div class="mantra-card-holder-image-v ">
            <img
              class="mantra-vert-image "
              src="https://picsum.photos/200/300 "
              alt="card"
            />
          </div>
          <div class="mantra-card-holder-text-vert ">
            <div class="mantra-card-holder-text-content ">
              <h2>{data.name}</h2>
              <h4>{data.description}</h4>
              <span class="mantra-discount ">Rs.{data.price}</span>
              <span class="mantra-original ">Rs.{data.original}</span>
            </div>
          </div>
          <div class=" mantra-card-btn ">
            <button class="mantra-button mantra-primary-btn ">
              <i class="fa fa-shopping-cart "></i>
              Add to cart
            </button>
          </div>
          <div class="mantra-text-overlay ">
            {data.outOfStock && <span>Out of Stock</span>}
          </div>
        </div>
      ))}
    </div>
  );
}
