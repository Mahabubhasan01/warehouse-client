import { Route, Routes } from 'react-router-dom';
import './App.css';
import useProductsHook from './Pages/CustomHooks/ProductsHook'
import Home from './Pages/HomePage/Home';
import CustomNavbar from './Pages/HomePage/Navbar/CustomNavbar';

function App() {
  const [products,setProducts] = useProductsHook([])
  return (
    <div>
      <CustomNavbar></CustomNavbar>

      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/inventory' element></Route>
      </Routes>
    </div>
  );
}

export default App;
