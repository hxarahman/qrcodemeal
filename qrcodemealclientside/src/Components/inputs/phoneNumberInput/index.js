import React, { useState } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import '../inputText/input.css';




const Index = (props) => {


    const {setState} = props;

    return (
        <div className="input_container">
            <p style={{ color: "white", fontSize: 16 }}>{props.label}</p>
            <div className="input-field-container">
                <PhoneInput
                    country={'us'}
                    onChange={phone => setState(phone)}
                    inputStyle={{backgroundColor:"transparent",border:"none"}}
                    buttonStyle={{backgroundColor:"transparent",border:"none"}}
                    containerStyle={{width:"100%"}}
                />
            </div>

        </div>
    )
}


export default Index;