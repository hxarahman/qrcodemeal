import React from "react";
import "./welcome.css"
import logo from '../../assets/images/logo-white.png'
import RoundedButton from "../../Components/button/roundedBtn";


//import components
import Header from "../../Components/header"



const Index = () => {
    return (
        <div className="welcome-main">
            <Header />
            <div className="container-fluid">
                <div className="logo-section">
                    <div>
                        <img src={logo} />
                        <h5 style={{ color: "white" }}>QRCODEMEAL</h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center w-100 wrap">
                    <div className="welcome-btn-section">
                        <div className="w-100 d-flex justify-content-center">
                            <p className="my-4">Welcome Text</p>
                        </div>
                        <div>
                            <RoundedButton name="Delivery / Pickup" />
                        </div>
                        <div className="mt-4">
                            <RoundedButton name="Dine In" />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


export default Index;