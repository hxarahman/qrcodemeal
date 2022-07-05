import React, { useContext } from 'react'
import './welcome.css'
import logo from '../../assets/images/logo-white.png'
import RoundedButton from '../../Components/button/roundedBtn'
import { Outlet, Link } from 'react-router-dom'

//import components
import Header from '../../Components/header'
import { AuthContext } from '../../context/context'

const Index = () => {
  const { setRole } = useContext(AuthContext)
  return (
    <div className="welcome-main">
      <Header />
      <div className="container-fluid">
        <div className="logo-section">
          <div>
            <img src={logo} />
            <h5 style={{ color: 'white' }}>QRCODEMEAL</h5>
          </div>
        </div>
        <div className="d-flex justify-content-center w-100 wrap">
          <div className="welcome-btn-section">
            <div className="w-100 d-flex justify-content-center">
              <p className="my-4">Welcome Text</p>
            </div>

            <div>

              <div className='my-4'>
              <select className='language_dropdown'>
                <option className='options'>
                  English 
                </option>
                <option className='options'>
                  Arabic
                </option>
              </select>
              </div>

              <Link to="menu">
                <RoundedButton onClick={() => setRole(1)} name="Delivery / Pickup" />
              </Link>
            </div>

            <div className="mt-4">
              <Link to="menu">
                <RoundedButton onClick={() => setRole(2)} name="Dine In" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
