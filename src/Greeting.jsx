import React from "react"

export function Greeting(props) {
  return (
    <div>
      <h1>Mi nombre es {props.name} {props.emoji}</h1>
      <p>Estoy recordando react</p>
    </div>
  )
}

export function UserCard() {
  return <h1>User Card</h1>

}