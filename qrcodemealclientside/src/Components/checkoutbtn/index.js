import React from "react";

//import css

import './checkoutbtn.css'


const Index = (props) => {
    
    const highlightedColor = "yellow"
    const backrgoundColor = "#7D141E"

    return(

        <div onClick={props.onClick} className="checkoutbtn_container">
            <button style={{backgroundColor:highlightedColor,color:backrgoundColor}} className="checkoutbtn">

                {props.title}
            </button>
        </div>
    )
}


export default Index