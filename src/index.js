import React from "react";
import ReactDOM from "react-dom"
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)


root.render(
  <div>
    <Greeting name="Juan Hernández" emoji="😶‍🌫️" />
    <Greeting name="Julett Hernández" emoji="👻" />
    <Greeting name="Leticia Herández" emoji="😗" />



  </div>)

