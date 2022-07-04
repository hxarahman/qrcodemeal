import React, { useState } from "react";
import { IoIosArrowDown, IoMdTime } from "react-icons/io";
import Timekeeper from 'react-timekeeper';
import DatePicker from 'react-date-picker'

//import css

import './input.css'



const Index = (props) => {
    const [timeModalVisible, setTimeModalVisible] = useState(false)

    const {setState} = props;

    return (
        <div style={props.style} className="input_container">
            <p style={{ color: "white", fontSize: 16 }}>{props.label}</p>
            <div onClick={() => props.icon ? setTimeModalVisible(!timeModalVisible) : console.log('Modal False')} className={props.icon ? `input-field-container-with-icon` : `input-field-container`}>
                <input
                    disabled={props.icon ? true : false}
                    className="input"
                    placeholder={props.name != "date" ? props.placeholder : null}
                    value={props.name === "date" ? props.placeholder : null}
                    onChange={(e)=> setState(e.target.value)}
                />
                {props.icon ?
                    props.name === 'date' ?
                        <div>
                            <IoIosArrowDown color="white" size={25} />
                        </div>
                        :
                        <div>
                            <IoMdTime color="white" size={25} />
                        </div>
                    : null
                }


            </div>
            {timeModalVisible &&
                <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Timekeeper
                    onChange={(date)=> setState(date.formatted12)}
                    />
                </div>
            }

        </div>
    )
}



export default Index