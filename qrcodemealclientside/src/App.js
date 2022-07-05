import React, { useState } from 'react'
import Menu from './Views/main_menu/main_menu'
import SubCategory from '../src/Views/sub_category/Index'
import FinishOrder from '../src/Views/finish_order'
import ReactDOM from 'react-dom/client'
//import css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Loader from './Components/loader/Index'
import Routes from '../src/routes/Index'
import { AuthProvider } from './context/context'
function App() {

  const [loading, setLoading] = useState(false)
  return loading ? (
    <Loader />
  ) : (
    <AuthProvider>
      <div style={{ backgroundColor: '#7D141E' }} className="App">
        <div className="app-nested">
          <Routes />
        </div>
        <div className="null-box">mughees</div>
      </div>
    </AuthProvider>

  )
}

export default App
