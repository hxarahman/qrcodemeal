import React, { useContext } from "react";
import { AuthContext } from "../../context/context";
import "./Card.css";

export default function Card(props) {
  const { role , backgroundColor , textColor , highlightedColor } = useContext(AuthContext)
  return (
    <div
      //   style={}
      className="card_div box_shadow_custom mt-3"
      style={{backgroundColor: backgroundColor}}
      onClick={props.onClick}
    >
      <div style={{ width: "65%" }}>
        <p style={{color:textColor}} className="first_para">{props.Heading}</p>
        <p style={{color:textColor}} className="second_para">
          {props.Discription}
        </p>
        <p style={{color:highlightedColor}} className="third_para">AED {props.Price}</p>

        {role === 1 &&
          <div
            //   style={}
            className="add_to_cart"
          >
            <div
              onClick={props.onClick}
              style={{
                backgroundColor: highlightedColor,
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
          style={{width:100, margin: "0px auto" }}
          src={props.src}
        />
      </div>

    </div>
  );
}
