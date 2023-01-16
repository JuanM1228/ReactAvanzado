import React from "react";
import ReactDOM from "react-dom"


const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

function Greeting() {
  return (
    <div>
      <h1>Hola mundo</h1>
      <p>Estoy recordando react</p>
    </div>
  )
}
root.render(
  <div>
    <Greeting />
  </div>)

