import React from "react";
import ReactDOM from "react-dom";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button"
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import Post from "./Post";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Post />
  </>
);
