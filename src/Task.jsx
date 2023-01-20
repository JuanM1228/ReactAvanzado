import React from "react";
import "./Stylesheets/Task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1> Titulo de la tarjeta</h1>
      <p className={ready ? "bg-green" : "bg-red"}>
        {ready === true ? "Tarea realizada" : "Tarea no realizada"}
      </p>
    </div>
  );
}
