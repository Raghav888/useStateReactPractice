import "./styles.css";
import React, { useState } from "react";
import Home from "./home";

export default function App() {
  // Password
  let [pass, setpass] = useState({ newpassword: "", confirmpassword: "" });
  let [value, setvalue] = useState("none");
  let [disable, setDisable] = useState(false);

  const confpass = (event) => {
    setpass({ ...pass, [event.target.name]: event.target.value });

    event.target.value === pass.newpassword
      ? setvalue("green")
      : setvalue("red");
    event.target.value === pass.newpassword
      ? setDisable(false)
      : setDisable(true);
  };

  const intialPassword = (event) => {
    setpass({ ...pass, [event.target.name]: event.target.value });
    console.log(pass.confirmpassword, pass.newpassword);
  };

  const logit = () => {
    console.log(pass);
  };

  // Twitter
  let [count, setcount] = useState("none");
  let [messgCount, messgcount] = useState(0);
  const countSize = (event) => {
    event.target.value.length > 2 ? setcount("red") : setcount("black");
    messgcount(event.target.value.length);
  };

  // Alphanumeirc pass
  let [password, setpassword] = useState("");
  const passCheck = (event) => {
    let reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    console.log(reg.test(event.target.value));
    reg.test(event.target.value) ? setpassword("black") : setpassword("red");
  };

  // Hide password
  let [typeoftext, typesetter] = useState("password");
  let [buttontext, buttonsetter] = useState("Show Password");
  const buttoncheck = () => {
    typeoftext === "password" ? typesetter("text") : typesetter("password");
    buttontext === "Show Password"
      ? buttonsetter("Hide Pass")
      : buttonsetter("Show Password");
  };
  //cart

  let [itemsincart, additem] = useState([{}]);
  const grape = () => {
    itemsincart.apple
      ? additem([
          { ...itemsincart },
          {
            apple: itemsincart.apple + 1,
            name: "apple"
          }
        ])
      : additem({ ...itemsincart, apple: 1 });
  };
  const apple = () => {
    itemsincart.grapes
      ? additem([
          { ...itemsincart },
          {
            grapes: itemsincart.grapes + 1,
            name: "Grapes"
          }
        ])
      : additem({ ...itemsincart, grapes: 1 });
  };
  // const pine = () => {
  //   itemsincart[grape]
  //     ? additem({ ...itemsincart, grape: itemsincart[grape] + 1 })
  //     : additem({ ...itemsincart, grape: 1 });
  // };

  // Todo
  let [texttodo, settext] = useState();
  let [todolist, addtodolist] = useState([]);

  const addtext = (event) => {
    settext(event.target.value);
  };
  const addtodo = () => {
    addtodolist([...todolist, texttodo]);
  };
  let [linebreak, setline] = useState();
  const handleClick = (event) => {
    setline("line-through");
  };

  let [comp, setcomp] = useState("Home");

  return (
    <div>
      <div>Password</div>
      <input onChange={intialPassword} name="newpassword" type="text"></input>
      <input
        name="confirmpassword"
        style={{ outlineColor: value, borderColor: value }}
        type="text"
        onChange={confpass}
      ></input>
      <button disabled={disable} onClick={logit}>
        Enter
      </button>
      <hr />
      <div>Twitter</div>
      <input
        style={{ outlineColor: count }}
        onChange={countSize}
        type="text"
      ></input>
      <p style={{ color: count }}>{messgCount}</p>
      <hr />
      <div>Password Alphanumeric</div>
      <input
        type="text"
        style={{ outlineColor: password }}
        onChange={passCheck}
      ></input>
      <hr />
      {/* Password hide */}
      <input type={typeoftext}></input>
      <button onClick={buttoncheck}>{buttontext}</button>
      <hr />
      {/* Cart */}

      <li>Apple</li>
      <button onClick={apple}>Add to cart</button>

      <li>Grapes</li>
      <button onClick={grape}>Add to cart</button>
      {/* <li>Pineaaple</li>
      <button onClick={pine}>Add to cart</button> */}
      <h2>Items in Cart</h2>
      <div>
        {itemsincart.name}
        {itemsincart.grapes}
      </div>
      <hr />
      <h2>Todo</h2>
      <input onChange={addtext} type="text"></input>
      <button onClick={addtodo}>Submit</button>
      {todolist.map((item, index) => (
        <p
          style={{ textDecorationLine: linebreak }}
          key={index}
          onClick={handleClick}
        >
          {item}
        </p>
      ))}
      <hr />
      <button onClick={() => setcomp("Home")}>Home</button>
      <button onClick={() => setcomp("Profile")}>Profile</button>
      <button onClick={() => setcomp("About")}>About</button>
      {comp === "Home" && <Home value={comp} />}
      {comp === "Profile" && <Home value={comp} />}
      {comp === "About" && <Home value={comp} />}
    </div>
  );
}