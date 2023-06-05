import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import  Home from './Home';
import Login from './Login';
import Signup from './Signup';
import T1 from './t1';
import T2 from './t2';
import ProductRegistration from './ProductRegistration';
import TableData from './TableData';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/t1' element={<T1 />}></Route>
        <Route path='/t2' element={<T2 />}></Route>
        <Route path='/productregistration' element={<ProductRegistration />}></Route>
        <Route path='/table' element={< TableData/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
