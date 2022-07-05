import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import "./header.css";

const Index = (props) => {
  const [back, setBack] = useState(false);

  return (
    <div className="header-main">
      <div className="">
        {props.back ? (
          <div onClick={props.onClick} className="icon-container">
            <IoIosArrowBack color="rgba(255, 255, 255, .9)" size={20} />
          </div>
        ) : <div className="icon-container-disable">
          <IoIosArrowBack color="rgb(141, 39, 49 , 0.8)" size={20} />
        </div>}
      </div>
      <div >
        <p className="heading">
          {props.title}
        </p>
      </div>
      {!props.toggle ?
        <div className=" d-flex justify-content-end">
          <div className="icon-container">
            <BiMenuAltRight color="rgba(255, 255, 255, .9)" size={20} />
          </div>
        </div>
        :
        <div className="icon-container-disable">
          <BiMenuAltRight color="rgb(141, 39, 49 , 0.1)" size={20} />
        </div>
      }

    </div>
  );
};

export default Index;