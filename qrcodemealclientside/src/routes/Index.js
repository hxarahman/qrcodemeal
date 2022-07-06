import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Addtocart from '../Views/product/Index'
import Menu from '../Views/main_menu/main_menu'
import Subcategory from '../Views/sub_category/Index'
import { useContext } from 'react'
import { AuthContext } from '../context/context'
// import your route components too

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/productdetail/:id" element={<Addtocart />} />
        <Route path="/subcategory" element={<Subcategory />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  )

}

export default Index
