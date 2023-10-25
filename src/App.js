import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/pages/Homepage';
import Footer from './customer/components/footer/Footer';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
        <Homepage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
