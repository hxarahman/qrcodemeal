import React, { useContext } from "react";
import { AuthContext } from "../../context/context";
import './nullBox.css'



const Index = ()=>{

    const {backgroundColor , textColor} = useContext(AuthContext)

    return(
        <div style={{backgroundColor:backgroundColor}} className="nulBox-nested">
        </div>
    )
}

export default Index;