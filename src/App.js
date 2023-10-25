import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/Homepage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/pages/ProductPage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        {/* <Homepage/> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
