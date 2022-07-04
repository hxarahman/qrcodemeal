import React, { useState } from "react";
import "./Index.css";
// import logo from "../../assets/images/logo-white.png";
import { FiFramer } from 'react-icons/fi'
import { IoIosWater } from 'react-icons/io'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
//import components
import Header from "../../Components/header";
import Cart_items from "../../Components/cards/cart_items/Cart_items";
import CheckOutBtn from '../../Components/checkoutbtn/index'
import Input from '../../Components/inputs/inputText/index'

const Index = () => {
    const [counter, setCounter] = useState(1)
    console.log("counter ", counter)
    const items = [
        {
            title: 'Medium portion(100 Calories)',
            price: 'AED13.50'
        },
        {
            title: 'Large portion(130 Calories)',
            price: 'AED13.50'
        },
    ]
    const addOnsLimit = ['Gazpacho', '(Min 2 - Max 5)']
    const addOns = [
        {
            title: 'Loaded fries',
            price: '+ AED13.50',
        },
        {
            title: 'Loaded fries',
            price: '+ AED13.50',
        },
    ]
    return (
        <div className="welcome-main">
            <div className="bgImage">
                <Header toggle={true} back={true} />
            </div>
            <div className="details_main_container">
                <div>
                    <p className="food_name">Gaspacho</p>
                    <div className="d-flex align-items-center justify-content-center">
                        <FiFramer style={{ color: 'white', fontSize: '15px' }} />
                        <p className="calories">100 Calories</p>
                    </div>
                    <p className="food_name discription">Lorem Ipsum is not simply random text.</p>
                </div>

                {/* order detail  */}

                <div>
                    <Cart_items addOnsLimit={addOnsLimit} items={items} addOns={addOns} />
                </div>

                {/* add a note */}
                <p className="food_name" style={{ fontWeight: 'unset' }}>Add a note</p>
                {/* input */}
                <Input placeholder="Optional" />

                {/* inputend */}
                <div className="d-flex align-items-center justify-content-center plus_minus_container">
                    {counter === 1 ?
                        <AiFillMinusCircle color="yellow" fontSize={'40px'} style={{ opacity: 0.4 }} />
                        :
                        <AiFillMinusCircle onClick={() => setCounter(counter - 1)} color="yellow" fontSize={'40px'} />
                    }
                    <p className="counter">{counter}</p>
                    <AiFillPlusCircle onClick={() => setCounter(counter + 1)} color="yellow" fontSize={'40px'} />
                </div>
            </div>
                <CheckOutBtn title='UPDATE' />
            {/* <button className="bottom">
    ayan
</button> */}


        </div>
    );
};

export default Index;
