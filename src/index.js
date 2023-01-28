import React from "react";
import ReactDOM from "react-dom";
import Post from "./Post";
import { useState } from "react";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);



const Counter = () => {

  const [counter, setCounter] = useState(0)

  const onClickHandler = () => {
    setCounter(counter + 1)
  }
  return (
    <div>
      <h1>counter : {counter}</h1>
      <button onClick={onClickHandler}>Sumar</button>
    </div>
  )
}


root.render(
  <>
    <Counter />
  </>
);
