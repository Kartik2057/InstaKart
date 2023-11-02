import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Homepage from '../customer/pages/Homepage'
import CartPage from '../customer/pages/CartPage'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/pages/ProductPage'
import ProductDetailPage from '../customer/pages/ProductDetailPage'
import CheckoutPage from '../customer/pages/CheckoutPage'
import OrdersPage from '../customer/pages/OrdersPage'
import OrderDetailPage from '../customer/pages/OrderDetailPage'

const CustomerRoutes = () => {
  return (
    <div>
      <div>
      <Navigation/>
      </div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}/>
        <Route path='/:product/:productId/' element={<ProductDetailPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/account/order' element={<OrdersPage/>}/>
        <Route path='/account/order/:orderId' element={<OrderDetailPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default CustomerRoutes
