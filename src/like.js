import "./styles.css";
import React, { useState } from "react";
import { v4 } from "uuid";
let items = [
  { name: "Grape", islike: false, id: v4() },
  { name: "Apple", islike: false, id: v4() },
  { name: "Banana", islike: false, id: v4() }
];
const markStrike = (id, statussetter, status) => {
  let data = status.map((item) =>
    item.id === id ? { ...item, islike: true } : item
  );
  statussetter(data);
};
export default function Like() {
  let [status, statussetter] = useState(items);
  return (
    <div>
      <ul>
        {status.map(({ name, id, islike }) => (
          <li key={id} onClick={() => markStrike(id, statussetter, status)}>
            {name}{" "}
            {islike ? (
              <button style={{ color: "yellow" }}> Liked</button>
            ) : (
              <button>Like</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
