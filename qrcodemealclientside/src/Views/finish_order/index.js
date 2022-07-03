import React, { useState } from "react";

//import components
import Header from '../../Components/header'
import Input from '../../Components/inputs/inputText'
import TextArea from '../../Components/inputs/textArea'
import CheckoutBtn from '../../Components/checkoutbtn'


//import icons

import { GiCheckMark } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";


//import css
import './finishorder.css'


const Index = () => {
    const hightlitedColor = "yellow";
    const backgroundColor = "#7D141E"
    const [radioSelected, setRadioSelected] = useState("")

    const radioBtnOptions = [
        "ASAP ~ 30 Minutes", "Later"
    ]



    return (
        <div>
            <div className="finishorder_main">
                <Header title="Finish Order" />
                <div>
                    <div className="d-flex justify-content-center mt-4">
                        <p style={{ fontSize: 15, color: "#959596" }}>Order type : Delivery</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p className="heading">Your Personal Info</p>
                    </div>
                    <div className="personal_info_section">
                        <Input label="Name" />
                        <Input label="E-mail" placeholder="Optional" />

                        <TextArea label="Address" />
                        <div className="w-100 d-flex justify-content-center mt-4">
                            <button style={{ borderColor: hightlitedColor }} className="location_btn">
                                <span><RiSendPlaneFill color={hightlitedColor} /></span>
                                <span style={{ color: hightlitedColor, marginLeft: 10 }}>Choose Loaction</span>
                            </button>
                        </div>
                    </div>
                    <div className="delivery_time_section">
                        <div className="d-flex justify-content-center mt-4">
                            <p className="heading">Delivery Time</p>
                        </div>
                        <div className="radio_btn_section">
                            {radioBtnOptions.map((v, i) => {
                                return (
                                    <div onClick={() => setRadioSelected(v)} className="radio_btn d-flex align-items-center">
                                        <div style={{ borderColor: hightlitedColor, backgroundColor: radioSelected === v ? hightlitedColor : "transparent" }} className="icon_sectin">
                                            <GiCheckMark size={10} color={backgroundColor} />
                                        </div>
                                        <div style={{ color: hightlitedColor }} className="label_section">
                                            {v}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="add_note_section">
                            <TextArea display="none" />
                    </div>
                </div>
            </div>
            <CheckoutBtn title="PROCEED TO CHECKOUT" />
        </div>
    )
}


export default Index;