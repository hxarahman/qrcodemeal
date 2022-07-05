import React, { useState } from "react";
import "./Index.css";
// import logo from "../../assets/images/logo-white.png";
import { FiFramer } from 'react-icons/fi'
import { IoIosWater } from 'react-icons/io'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
//import components
import Header from "../../Components/header";
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Index = () => {

    const email = 'example@gmail.com'
    const name = 'David lisa'
    const date = '25.06.2022 08:04:06'
    const phone = '97132312312'
    const address = 'Jamshed Quarters Shikarpur Colony, Karachi'
    const deliverytime = '25.06.2022 08:04:06'
    const ordertype = 'Delivery'
    const paymenttype = 'Payment Type'

    const items = [
        {
            title: `chef's Special Salad (x3)`,
            price: 'AED15:00'
        },
        {
            title: `chef's Special Salad (x3)`,
            price: 'AED15:00'
        },
        {
            title: `chef's Special Salad (x3)`,
            price: 'AED15:00'
        },
    ]

    const price = [
        {
            title: `Subtotal`,
            price: 'AED15:00'
        },
        {
            title: `Tip`,
            price: 'AED15:00'
        },
    ]

    return (
        <div className="welcome-main">
            <div className="d-flex justify-content-center align-items-center">
                <AiOutlineCheckCircle style={{ marginTop: '20px', color: 'white' }} size={'50px'} />
            </div>
            <h3 style={{ margin: '10px 0px', fontSize: '15px', textAlign: 'center', color: 'white' }}>

                Your checkout request in sent!
            </h3>
            <p style={{ margin: '0px', fontSize: '10px', textAlign: 'center', color: 'white' }}>
                we sent the summary of your order to:
            </p>
            <p style={{ margin: '0px 0px 10px 0px', fontSize: '10px', textAlign: 'center', color: 'white' }}>

                example@gmail.com
            </p>
            <div className="d-flex justify-content-center align-items-center">
                <button style={{ backgroundColor: 'black', color: 'white', fontWeight: '700', padding: '4px 8px', borderRadius: '50px', fontSize: '10px' }}>
                    Order Again
                </button>
            </div>
            <div style={{ margin: '0px 40px' }}>

                <h3 style={{ margin: '10px 0px', fontSize: '15px', textAlign: 'center', color: 'white' }}>

                    Summary
                </h3>
                <p style={{ margin: '2px 0px', fontSize: '10px', color: 'white' }}>
                    Date : {date}
                </p>
                <p style={{ margin: '2px 0px', fontSize: '10px', color: 'white' }}>
                    Name : {name}
                </p>
                <p style={{ margin: '2px 0px', fontSize: '10px', color: 'white' }}>
                    E-Mail : {email}
                </p>
                <p style={{ margin: '2px 0px', fontSize: '10px', color: 'white' }}>
                    Phone Number : {phone}
                </p>
                <p style={{ margin: '0px', fontSize: '10px', color: 'white' }}>
                    Address : {address}
                </p>
                <p style={{ margin: '2px 0px', fontSize: '10px', color: 'white' }}>
                    Delivery Time : {deliverytime}
                </p>
                <p style={{ margin: '2px 0px', fontSize: '10px', color: 'white' }}>
                    Delivery Type : {ordertype}
                </p>
                <p style={{ margin: '2px 0px', fontSize: '10px', color: 'white' }}>
                    Payment Type : {paymenttype}
                </p>
                <div style={{ margin: '0px 0px', padding: '15px 0px', borderBottom: '1px solid white', borderBottomColor: 'white' }}>

                    {items.map((item, index) => {
                        return (
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ margin: '5px 0px', fontSize: '12px', color: 'white' }}>

                                    {item.title}
                                </p>

                                <p style={{ margin: '5px 0px', fontSize: '12px', color: 'white' }}>
                                    {item.price}
                                </p>
                            </div>
                        )
                    })}
                </div>

                    {price.map((item, index) => {
                        return (
                            <div style={{ display: 'flex', justifyContent: 'space-between' , borderBottom: '1px solid white', borderBottomColor: 'white'  }}>
                                <p style={{ margin: '0px 0px' ,padding : '10px 0px', fontSize: '10px', color: 'white' ,  }}>

                                    {item.title}
                                </p>

                                <p style={{ margin: '0px 0px',padding : '10px 0px', fontSize: '10px', color: 'white' }}>
                                    {item.price}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' , borderBottom: '1px solid white', borderBottomColor: 'white' ,margin : '0px 40px'   }}>
                                <p style={{ margin: '0px 0px' ,padding : '10px 0px', fontSize: '10px', color: 'white' ,  }}>

                                    {'Total'}
                                </p>

                                <p style={{ margin: '0px 0px',padding : '10px 0px', fontSize: '10px', color: 'white' }}>
                                    {'AED15:00'}
                                </p>
                            </div>



            </div>

    );
};

export default Index;
