import React from "react";
import ReactDOM from "react-dom";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
let alert = () => { alert("Hello") }
root.render(
  <>
    <Button text='Click me' />
    <Button text='Pay' />
    <Button />

    {/*  <UserCard
      name="Juan Herrera"
      amount={300}
      married={true}
      points={[12, 234, 11, 10]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={alert}
    /> */}
  </>
);
