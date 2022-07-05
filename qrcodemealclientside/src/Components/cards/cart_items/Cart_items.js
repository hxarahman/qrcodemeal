import React, { useContext, useState } from "react";
import "./Cart_items.css";
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { AuthContext } from "../../../context/context";

export default function Cart_items(props) {
    const [toggle, setToggle] = useState(false)
    const [index, setIndex] = useState(null)
    const [indexAddOns, setIndexAddOns] = useState(null)
    const { role } = useContext(AuthContext)

    return (
        <div
        //   style={}
        // className="card_div"
        >
            {props.items.map((item, ind) => {
                return (
                    <div onClick={() => setIndex(ind)} className="card_div">
                        {role === 1 ?

                            <div style={{ display: 'flex' }}>
                                {index === ind ?
                                    <AiFillCheckCircle color="yellow" size={20} />
                                    :
                                    <BsCircle color="yellow" size={20} />
                                }
                                <p className="title">{item.title}</p>
                            </div>
                            :
                            <div style={{ display: 'flex' }}>

                                <p className="title">{item.title}</p>
                            </div>
                        }


                        <p className="price" >{item.price}</p>
                    </div>
                )
            })}

            <p className="add_ons">{props.addOnsLimit[0]}</p>
            <p className="add_ons_limit">{props.addOnsLimit[1]}</p>


            {props.addOns.map((item, ind) => {
                return (
                    <div onClick={() => setIndexAddOns(ind)} className="card_div">
                        {role === 1 ?
                            <div style={{ display: 'flex' }}>
                                {indexAddOns === ind ?
                                    <ImCheckboxChecked color="yellow" size={20} />
                                    :
                                    <ImCheckboxUnchecked color="yellow" size={20} />
                                }
                                <p className="title">{item.title}</p>
                            </div>
                            :
                            <div style={{ display: 'flex' }}>

                                <p className="title">{item.title}</p>
                            </div>
                        }


                        <p className="price" >{item.price}</p>
                    </div>
                )
            })}




        </div>
    );
}
