import React from "react";


//import css

import './input.css'



const Index = (props) => {
    return (
        <div className="input_container">
            <p style={{ color: "white", fontSize: 16 }}>{props.label}</p>
            <div className="input-field-container">
                <input
                    className="input"
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}



export default Index