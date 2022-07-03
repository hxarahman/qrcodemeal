import React from "react";


//import css

import '../inputText/input.css'



const Index = (props) => {
    return (
        <div style={{display: props.display ? props.display : "block"}} className="input_container">
            <p style={{ color: "white", fontSize: 16 }}>{props.label}</p>
            <div className="input-field-container">
                <textarea rows={4}
                    className="input"
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}



export default Index