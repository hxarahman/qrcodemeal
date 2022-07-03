// import React from "react";
// import "./main_menu.css"
// import logo from '../../assets/images/logo-white.png'
// import RoundedButton from "../../Components/button/roundedBtn";
// //import components
// import Header from "../../Components/header"
// import colors from "../../constant/colors";
// import Card from "../../Components/cards/Card";

const card_detial = [
    {
        heading: 'Chefs Special Salad',
        discription: `Fresh beetroot salad served with
        crumbled goat cheese, walnuts, and
        tomatoes`,
        price: `AED 15.00 - AED 60.00`
    },
    {
        heading: `Chef's Special Salad`,
        discription: `Fresh beetroot salad served with
        crumbled goat cheese, walnuts, and
        tomatoes`,
        price: `AED 15.00`
    },
    {
        heading: `Chef's Special Salad`,
        discription: `Fresh beetroot salad served with
        crumbled goat cheese, walnuts, and
        tomatoes`,
        price: `AED 15.00 - AED 60.00`
    },
]

// const Index = () => {
//     return (
//         <div className="welcome-main">
//             <Header />
//             <div className="container-fluid">
//                 <div>
 
//                     <div>
//                         <h5 style={{ color: colors.yellow, textAlign: 'center', fontSize: '18px', fontFamily: 'arial' }}>Main Menu</h5>
//                     </div>
//                     <div>
//                         <h5 style={{ color: 'white', textAlign: 'center', fontSize: '14px', fontFamily: 'arial' }}>All your favorites available for delivery & pick-up!</h5>
//                     </div>
//                 </div>

//                 {/* <div className="d-flex justify-content-center w-100 wrap">
//                     <div className="welcome-btn-section">
//                         <div className="w-100 d-flex justify-content-center">
//                             <p className="my-4">Welcome Text</p>
//                         </div>
//                         <div>
//                             <RoundedButton name="Delivery / Pickup" />
//                         </div>
//                         <div className="mt-4">
//                             <RoundedButton name="Dine In" />
//                         </div>
//                     </div>
//                 </div> */}
//                 {/* <div>

//                     <div>
//                         <h5 style={{ color: colors.yellow, textAlign: 'center', fontSize: '18px', fontFamily: 'arial' }}>All Item</h5>
//                     </div>
//                     <div>
//                         <h5 style={{ color: 'white', textAlign: 'center', fontSize: '14px', fontFamily: 'arial' }}>Fresh and organic ingredients</h5>
//                     </div>
//                 </div>
//                 <div style={{ backgroundColor: 'rgba(201, 76, 76, 0.3)', display: 'flex', padding: '15px 15px 0px 15px' }}>
//                     <div>
//                         <p style={{ lineHeight: '20px', fontSize: '14px', color: 'white', fontFamily: 'arial' }}>
//                             Chef's Special Salad
//                         </p>
//                         <p style={{ lineHeight: '20px', fontSize: '12px', color: 'white', fontFamily: 'arial' }}>

//                             Fresh beetroot salad served with
//                             crumbled goat cheese, walnuts, and
//                             tomatoes
//                         </p>
//                         <p style={{ lineHeight: '20px', fontSize: '12px', color: colors.yellow, fontFamily: 'arial' }}>
//                             AED 15.00 - AED 60.00
//                         </p>
//                         <p style={{ fontSize: '12px', color: colors.yellow, fontFamily: 'arial' }}>
//                             AED 15.00 - AED 60.00
//                         </p>
//                     </div>
//                     <div>
//                         <img style={{ width: '100px', height: '100px' }} src={'https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk='} />

//                     </div>
//                 </div> */}
//                    {/* <Card />    */}
//                    {/* <Card />    */}
              

//             </div>
//         </div>)
// }


// export default Index;

import React from "react";
import "./main_menu.css";
import logo from "../../assets/images/logo-white.png";
import RoundedButton from "../../Components/button/roundedBtn";

//import components
import Header from "../../Components/header";
import Card from "../../Components/cards/Card";

const Index = () => {
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
        <div></div>
        {/* //// */}

        <div>
          <h5 className="main_menu">All Item</h5>
          <h5 className="main_menu_child">Fresh and organic ingredients</h5>
        </div>
        {/* box  */}
        {card_detial.map((item, index) => {
                    return (
                        <Card
                            Heading={item.heading}
                            Discription={item.discription}
                            Price={item.price}
                        />
                    )
                })}
      </div>
    </div>
  );
};

export default Index;
