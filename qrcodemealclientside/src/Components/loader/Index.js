import React, { useState } from "react";
import logo from "../../assets/images/logo-white.png";
import './index.css'

const Loader = () => {
  const [index, setIndex] = useState(0);
  return (
    <div class="d-flex align-items-center  justify-content-center main_div">
      <img src={logo} style={{ width : '100px' }} />
    </div>
  );
};

export default Loader;
