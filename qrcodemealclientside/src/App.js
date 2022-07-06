import React, { useContext, useEffect, useState } from 'react'
import Menu from './Views/main_menu/main_menu'
import SubCategory from '../src/Views/sub_category/Index'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
//import css
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//import font family 



import Loader from './Components/loader/Index'
import Routes from '../src/routes/Index'
import NullBox from './Components/nullBox'
import {AuthContext} from './context/context'

function App() {

  const { role, highlightedColor, backgroundColor, textColor , setBackgroundColor , setHighlightedColor , setTextColor } = useContext(AuthContext)


  const token = "1|5hNVItwOA0FikjYvxSnXcoqQKWg1pROS1SFhHWCv"
  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };

  const settingsAPI = () => {

    axios.get(
      'http://menu.msac.ae/api/v1/settings',
      config
    ).then((res) => {
      setBackgroundColor(res.data.data[0].background_color)
      setTextColor(res.data.data[0].text_color)
      setHighlightedColor(res.data.data[0].highlight_color)
    })
      .catch((e) => {
        console.log(e)
      })
  }


  useEffect(()=>{
    settingsAPI()
  })

  const [loading, setLoading] = useState(false)
  return loading ? (
    <Loader />
  ) : (
      <div style={{backgroundColor:backgroundColor}} className="App">
        <div className="app-nested">
          <Routes />
        </div>
        <div className="null-box">
          <NullBox />
        </div>
      </div>

  )
}

export default App
