import React from "react";


//import css

import '../inputText/input.css'



const Index = (props) => {

    const {setState} = props;


    return (
        <div className="input_container">
            <p style={{ color: "white", fontSize: 16 , display: props.show ? props.show : "block" }}>{props.label}</p>
            <div className={props.show != "none" ? "input-field-container" : null}>
                <textarea rows={4}
                    className="input"
                    placeholder={props.placeholder}
                    onChange={(e)=> setState(e.target.value)}
                />
            </div>
        </div>
    )
}



export default Index