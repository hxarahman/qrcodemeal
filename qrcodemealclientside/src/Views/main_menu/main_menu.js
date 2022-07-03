import React, { useState } from "react";
import "./main_menu.css";
import logo from "../../assets/images/logo-white.png";
import RoundedButton from "../../Components/button/roundedBtn";

//import components
import Header from "../../Components/header";
import Card from "../../Components/cards/Card";

const card_detial = [
  {
    heading: "Chefs Special Salad",
    discription: `Fresh beetroot salad served with
      crumbled goat cheese, walnuts, and
      tomatoes`,
    price: `AED 15.00 - AED 60.00`,
  },
  {
    heading: `Chef's Special Salad`,
    discription: `Fresh beetroot salad served with
      crumbled goat cheese, walnuts, and
      tomatoes`,
    price: `AED 15.00`,
  },
  {
    heading: `Chef's Special Salad`,
    discription: `Fresh beetroot salad served with
      crumbled goat cheese, walnuts, and
      tomatoes`,
    price: `AED 15.00 - AED 60.00`,
  },
];

const imagesWithContent = [
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "All item",
    product: [
      {
        heading: "Chefs Special Salad",
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00 - AED 60.00`,
      },
      {
        heading: `Chef's Special Salad`,
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00`,
      },
      {
        heading: `Chef's Special Salad`,
        discription: `Fresh beetroot salad served with
          crumbled goat cheese, walnuts, and
          tomatoes`,
        price: `AED 15.00 - AED 60.00`,
      },
    ],
  },
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "2 item",
    product: [],
  },
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "No item",
    product: [],
  },
  {
    url: "https://img.freepik.com/photos-gratuite/delicieux-hamburgers-grilles_62847-14.jpg?w=2000",
    title: "4 item",
    product: [],
  },
];

const Index = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="welcome-main">
      <Header />
      <div className="container-fluid">
        <div>
          <h5 className="main_menu">Main Menu</h5>
          <h5 className="main_menu_child">
            All your favorites available for delivery & pick-up!
          </h5>
        </div>
        {/* images */}
        <div className="image_div">
          {imagesWithContent.map((item, Index) => {
            return (
              <div onClick={() => setIndex(Index)}>
                <img className="images" src={item.url} />
                <p
                  className="img_content"
                  style={{ color: index === Index ? "yellow" : "white" }}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        {/* //// */}

        <div>
          <h5 className="main_menu">All Item</h5>
          <h5 className="main_menu_child">Fresh and organic ingredients</h5>
        </div>
        {/* box  */}
        {imagesWithContent[index].product.length === 0 ? (
          <p className="no_avaliable">No Items are Available Now!</p>
        ) : (
          card_detial.map((item, Index) => {
            return (
              <div>
                <Card
                  Heading={item.heading}
                  Discription={item.discription}
                  Price={item.price}
                />
              </div>
            );
          })
        )}
        <p className="powered_by">Powerd by QR Code Menu</p>
      </div>
    </div>
  );
};

export default Index;
