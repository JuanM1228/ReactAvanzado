import React from "react";
import ReactDOM from "react-dom";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button"
import { TaskCard } from "./Task";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
let alert = () => { alert("Hello") }
root.render(
  <>
    <TaskCard />
  </>
);
