import "./styles.css";
import React, { useState } from "react";
import { v4 } from "uuid";
let itemList = ["item one", "item two", "item three", "item four"];
export default function AddtoCart() {
  const [cartList, setCartList] = useState([]);

  const addToCart = (newItem) => {
    if (cartList.length > 0) {
      let ind = cartList.filter((obj) => obj.name === newItem);
      let itemIndex = ind[0];
      if (itemIndex === undefined) {
        let newObj = { name: newItem, qty: 1, id: v4() };
        setCartList([...cartList, newObj]);
      } else {
        let newCartList = cartList.map((item) =>
          item.id === itemIndex.id ? { ...item, qty: item.qty + 1 } : item
        );
        setCartList(newCartList);
      }
    } else {
      let newObj = { name: newItem, qty: 1, id: v4() };
      console.log(newObj);
      setCartList([...cartList, newObj]);
    }
  };
  return (
    <div className="App">
      <h2>Items</h2>
      <ol>
        {itemList.map((item) => {
          return (
            <li key={item}>
              {item}{" "}
              <button
                onClick={() => {
                  addToCart(item);
                }}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ol>
      <br />
      <hr />
      <h2>Cart</h2>
      <ul>
        {cartList.map((item) => {
          return (
            <li key={item}>
              {item.name} quantity={item.qty}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
