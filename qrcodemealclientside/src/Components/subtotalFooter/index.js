import React, { useState } from "react";


//import component

import CheckoutBtn from '../checkoutbtn'


//import css
import './subtotal.css'


//import icons 


import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



const Index = (props) => {

    const subtotal = 250
    const total = 250

    const [up, setUp] = useState(false)

    return (
        <div>
            <div style={{backgroundColor:"rgba(255,255,255, 0.1)"}} className={!up ? "subtotal_main_container" : "expanded_container"}>
                <div className="d-flex justify-content-center">
                    <div onClick={()=> setUp(!up)} className="w-fit icon_container">
                    {!up ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
                    </div>
                </div>
                {up ? <div className="subtotal_container w-100 d-flex">
                    <div className="w-50">
                        <p>Sub Total</p>
                    </div>
                    <div className="w-50 d-flex justify-content-end">
                        <p>
                            AED{subtotal}
                        </p>
                    </div>
                </div>:null}
                <div className="total_container w-100 d-flex">
                <div className="w-50">
                    <p>Total</p>
                </div>
                <div className="w-50 d-flex justify-content-end">
                    <p>
                    AED{total}
                    </p>
                </div>
                </div>


            </div>
            <CheckoutBtn onClick={props.onClick} title={props.title} />
        </div>
    )
}


export default Index;