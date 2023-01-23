import React from "react";
import ReactDOM from "react-dom";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button"
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
let evento = (e) => {
  console.log(e.target.value + '...')
}
root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Saludo" />
    <input onChange={evento} />
  </>
);
