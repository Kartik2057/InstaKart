import './App.css';
import { Route, Routes } from 'react-router-dom';
import {CustomerRoutes} from './routers/CustomerRoutes';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}/>
      </Routes>
      </div>
  );
}

export default App;
