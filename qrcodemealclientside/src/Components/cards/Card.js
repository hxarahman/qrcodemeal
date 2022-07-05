import React, { useContext } from "react";
import { AuthContext } from "../../context/context";
import "./Card.css";

export default function Card(props) {
  const { role } = useContext(AuthContext)
  return (
    <div
      //   style={}
      className="card_div box_shadow_custom"
      style={{backgroundColor: "rgba(255,255,255, 0.1)"}}
    >
      <div style={{ width: "65%" }}>
        <p className="first_para">{props.Heading}</p>
        <p className="second_para">
          {props.Discription}
        </p>
        <p className="third_para">AED{props.Price}</p>

        {role === 1 &&
          <div
            //   style={}
            className="add_to_cart"
          >
            <div
              onClick={props.onClick}
              style={{
                backgroundColor: "yellow",
                padding: "50px 50px",
                marginTop: "-40%",
                //   zIndex: "999",
                transform: "rotate(135deg)",
              }}
            ></div>
          </div>
        }
      </div>
      <div>
        <img
          style={{width:100,height:80, margin: "0px auto" }}
          src={props.src}
        />
      </div>

    </div>
  );
}
