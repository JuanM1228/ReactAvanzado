import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import "./Stylesheets/index.css"
import { DiReact } from "react-icons/di"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <div className="title">
      < DiReact className="icons" />
      <h1>Hooks React</h1>
    </div>
    <Counter />

  </>
);
