import React, { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import "./header.css";
import { AuthContext } from "../../context/context";

const Index = (props) => {
  const [back,  setBack] = useState(false);
  const {backgroundColor , textColor , highlightedColor} = useContext(AuthContext)
  return (
    <div className="header-main">
      <div className="">
        {props.back ? (
          <div style={{backgroundColor:backgroundColor}} onClick={props.onClick} className="icon-container">
            <IoIosArrowBack color={textColor}  size={20} />
          </div>
        ) : null}
      </div>
      <div >
        <p className="heading">
          {props.title}
        </p>
      </div>
      {!props.toggle ?
        <div className=" d-flex justify-content-end">
          <div style={{backgroundColor:backgroundColor}} className="icon-container">
            <BiMenuAltRight color={textColor}  size={20} />
          </div>
        </div>
        :
       null
      }

    </div>
  );
};

export default Index;