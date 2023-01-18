import React from "react";

export function Greeting(props) {
  return (
    <div>
      <h1>
        Mi nombre es {props.name} {props.emoji}
      </h1>
      <p>Estoy recordando react</p>
    </div>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{amount}</h1>
      <h1>{married ? "married" : "single"}</h1>
      <ul>
        <li>{address.city}</li>
        <li>{address.street}</li>
      </ul>
    </div>
  );
}
