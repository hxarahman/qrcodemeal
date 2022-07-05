import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from '../Views/welcome/index'
import Editcart from '../Views/edit_cart/Index'
import Addtocart from '../Views/product/Index'
import Menu from '../Views/main_menu/main_menu'
import Subcategory from '../Views/sub_category/Index'
import Finishorder from '../Views/finish_order/index'
import Cart from '../Views/cart/Index'
import Confirmorder from '../Views/confirm_order/Index'
// import your route components too

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/editcart" element={<Editcart />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/subcategory" element={<Subcategory />} />
        <Route path="/finishorder" element={<Finishorder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmorder" element={<Confirmorder />} />
        {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  )

}

export default Index
