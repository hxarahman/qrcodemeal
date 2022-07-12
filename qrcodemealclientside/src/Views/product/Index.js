import React, { useContext, useEffect, useState } from "react";
import "./Index.css";
import { FiFramer } from 'react-icons/fi'
import { IoIosWater } from 'react-icons/io'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import axios from "axios";

//import components
import Header from "../../Components/header";
import Cart_items from "../../Components/cards/cart_items/Cart_items";
import Addtocard from '../../Components/checkoutbtn/index'
import Input from '../../Components/inputs/inputText/index'
import { AuthContext } from "../../context/context";
import Loader from "../../Components/loader/Index";
import { useNavigate, useParams } from "react-router-dom";


const Index = () => {

    const { role, highlightedColor, backgroundColor, textColor , setBackgroundColor , setHighlightedColor , setTextColor } = useContext(AuthContext)
    const [productDetail, setProductDetail] = useState()
    const params = useParams()
    const navigate = useNavigate()
    const token = "1|5hNVItwOA0FikjYvxSnXcoqQKWg1pROS1SFhHWCv"
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const productApiCall = (id) => {
        const idNumber = Number(id);


        axios.get(
            'http://menu.msac.ae/api/v1/products',
            config
        ).then((res) => {
            const allProducts = res.data.data;
            const filteredProducts = allProducts.filter(product => product.id === idNumber)
            setProductDetail(filteredProducts)

        })
            .catch((e) => {
                console.log(e)
            })
    }

    

    useEffect(() => {
        productApiCall(params.id)
    }, [])


    return (productDetail ?
        <div style={{backgroundColor:backgroundColor,height:"100%"}} className="welcome-main">
                <div className="position-absolute top-2">
                <Header onClick={()=> navigate(-1)} toggle={true} back={true} />
                </div>
            <div className="bgImage">
                <img src={productDetail[0].image.url} />
            </div>
            <div className="my-3">
                <p style={{color:textColor}} className="food_name">{productDetail[0].name}</p>
                <p style={{color:highlightedColor}} className="food_name">AED {productDetail[0].price}</p>
                <p style={{color:textColor}} className="food_name discription">{productDetail[0].description}</p>
            </div>



        </div>
        : <Loader />
    )
};

export default Index;
