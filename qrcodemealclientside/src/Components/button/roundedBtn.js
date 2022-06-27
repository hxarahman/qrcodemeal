import React from "react";
import "./button.css"


const RoundedButton = (props)=>{
    return(
            <button className="rounded-btn">{props.name}</button>     
    )
}

export default RoundedButton;