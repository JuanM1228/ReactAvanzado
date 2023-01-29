import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import "./Stylesheets/index.css"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


root.render(
  <>
    <h1 className="title">Hooks React</h1>
    <Counter />
  </>
);
