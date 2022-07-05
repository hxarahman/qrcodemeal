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


    const highlightedColor = "yellow"

    const { role } = useContext(AuthContext)
    const [counter, setCounter] = useState(1)
    const [productDetail, setProductDetail] = useState()
    const [price , setPrice] = useState("200")
    const params = useParams()
    const navigate = useNavigate()
    const productApiCall = (id) => {
        const idNumber = Number(id);

        const token = "1|q83lSa3MuQ4b96AQY4fQ3TeQpAHW38uKm6HpZGpa"
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.get(
            'http://menu.msac.ae/api/v1/products',
            config
        ).then((res) => {
            const allProducts = res.data.data;
            const filteredProducts = allProducts.filter(product => product.id === idNumber)
            console.log('filteredProducts', filteredProducts)
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
        <div className="welcome-main">
                <div className="position-absolute top-2">
                <Header onClick={()=> navigate(-1)} toggle={true} back={true} />
                </div>
            <div className="bgImage">
                <img src={productDetail[0].image.url} />
            </div>
            <div className="my-3">
                <p className="food_name">{productDetail[0].name}</p>
                <p style={{color:highlightedColor}} className="food_name">AED {price}</p>
                <p className="food_name discription">{productDetail[0].description}</p>
            </div>



        </div>
        : <Loader />
    )
};

export default Index;
