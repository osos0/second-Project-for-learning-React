/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Iteam(props) {
  return (
    <li className="list-group-iteam">
      <img src={props.p.img} alt={props.p.info} />
      <input type="checkbox" id={props.info}></input>
      <label htmlFor={props.p.info}>{props.p.media}</label>
    </li>
  );
}
