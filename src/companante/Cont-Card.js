import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={require(`${props.img}`)} alt="pho" />
      <h1>{props.name}</h1>
      <h3>{props.company} Company</h3>
      <p>{props.Phone}</p>
      <p>{props.Postion}</p>
    </div>
  );
}
