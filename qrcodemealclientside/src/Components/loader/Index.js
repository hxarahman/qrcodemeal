import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../context/context";
import './index.css'

const Loader = () => {
  const {backgroundColor} = useContext(AuthContext)
  const [index, setIndex] = useState(0);
  return (
    <div style={{backgroundColor:backgroundColor}} class="d-flex align-items-center  justify-content-center main_div">
      <img className="logo_img" src={logo} style={{ width : '100px' }} />
    </div>
  );
};

export default Loader;
