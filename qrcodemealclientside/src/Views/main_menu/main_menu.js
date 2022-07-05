import React, { useEffect, useState, useContext } from "react";
import "./main_menu.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { SpinnerCircular } from 'spinners-react';
import { AuthContext } from "../../context/context";


//import components
import Loader from "../../Components/loader/Index";
import Header from "../../Components/header";
import Card from "../../Components/cards/Card";
import { Link, useNavigate } from "react-router-dom";




const Index = () => {


  const { highlightedColor } = useContext(AuthContext)
  const [ itemId , setItemId] = useState(1)
  const navigation = useNavigate();
  const [category, setCategory] = useState()

  const [showProducts, setShowProducts] = useState()
  const [index, setIndex] = useState(0);
  const token = "1|q83lSa3MuQ4b96AQY4fQ3TeQpAHW38uKm6HpZGpa"
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const categoryApiCall = () => {

    axios.get(
      'http://menu.msac.ae/api/v1/categories',
      config
    ).then((res) => {
      setCategory(res.data.data)
    })
      .catch((e) => {
        console.log(e)
      })
  }
  const productApiCall = (id) => {

    axios.get(
      'http://menu.msac.ae/api/v1/products',
      config
    ).then((res) => {
      const allProducts = res.data.data;
      const filteredProducts = allProducts.filter(product => product.category_id === id)
      setShowProducts(filteredProducts)

    })
      .catch((e) => {
        console.log(e)
      })
  }


  useEffect(() => {
    categoryApiCall()
    productApiCall(itemId)
  }, [])


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return category ? (
    <div className="welcome-main">
      <Header toggle="false" />
      <div className="container-fluid">
        <div>
          <h5 className="main_menu">Main Menu</h5>
          <h5 className="main_menu_child">
            All your favorites available for delivery & pick-up!
          </h5>
        </div>
        {/* images */}
        <div className="w-100">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            keyBoardControl={true}
            autoPlaySpeed={1000}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
            afterChange={(previous, { currentSlide }) => {
              const minus = ()=>{
                setIndex(index -1)
                setItemId(itemId -1)
                productApiCall(itemId - 1)
              }

              const plus = ()=>{
                setIndex(index +1)
                setItemId(itemId + 1)
                productApiCall(itemId + 1)

              }
              currentSlide < previous ? minus() : plus()
            }}
            centerMode={true}
          >
            {category.map((item, Index) => {
              return (
                <div className="main_menu_items" onClick={() => {
                  productApiCall(item.id)
                  setIndex(Index)
                  setItemId(item.id)
                }}>
                  <div className="nested_container">
                    <img className="images" src={item.image.url} />
                    <div className="content_section" style={{ borderColor: index === Index ? highlightedColor : "transparent" }}>
                      <p
                        className="img_content"
                        style={{
                          color: index === Index ? highlightedColor : "white",
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        {/* //// */}

        {showProducts ? <div>
          <h5 className="main_menu">All Item</h5>
          <h5 className="main_menu_child">Fresh and organic ingredients</h5>
        </div> : null}
        {/* box  */}
        {showProducts ? showProducts.length === 0 ? (
          <p className="no_avaliable">No Items are Available Now!</p>
        ) : (
          showProducts?.map((item, Index) => {
            return (
              <Card
                Heading={item.name}
                Discription={item.description}
                Price="200"
                src={item.image.url}
                onClick={() => navigation('/productdetail/' + item.id)}
              />
            );
          })
        ) :  <div className="d-flex justify-content-center my-4">
        <SpinnerCircular thickness={250} speed={250} color={highlightedColor} />
      </div>}
        <p className="powered_by">Powerd by QR Code Menu</p>
      </div>
    </div>
  ) : <Loader />
};

export default Index;
