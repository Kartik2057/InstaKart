import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/Homepage';
import Footer from './customer/components/footer/Footer';
import ProductPage from './customer/pages/ProductPage';
import ProductDetailPage from './customer/pages/ProductDetailPage';
import CartPage from './customer/pages/CartPage';
import CheckoutPage from './customer/pages/CheckoutPage';
import OrdersPage from './customer/pages/OrdersPage';
import OrderDetailPage from './customer/pages/OrderDetailPage';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*'  element={<CustomerRoutes/>}/>
      </Routes>
  
      </div>
  );
}

export default App;
