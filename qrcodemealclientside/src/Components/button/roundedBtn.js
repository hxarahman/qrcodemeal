import React from "react";
import "./button.css"


const RoundedButton = (props) => {
  console.log("props ", props)
  return (
    <button onClick={props.onClick} className="rounded-btn">{props.name}</button>

  )
}

export default RoundedButton;