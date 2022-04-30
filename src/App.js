import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItems from "./Pages/AddItems/AddItems";
// import useProductsHook from './Pages/CustomHooks/ProductsHook'
import Footer from "./Pages/HomePage/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/HomePage/LogIn/Login";
import CustomNavbar from "./Pages/HomePage/Navbar/CustomNavbar";
import SignUp from "./Pages/HomePage/SignUp/SignUp";
import Inventory from "./Pages/Inventory/Inventory";
import ManageItems from "./Pages/MangeItems/ManageItems";
import MyItems from "./Pages/MyItems/MyItems";
import Notfound from "./Pages/Shared/Notfound";
import ProtectAuth from "./Pages/Shared/ProtectAuth";
/* import ProtectAuth from '../src/firebase.init'
 */
function App() {
  // const [products,setProducts] = useProductsHook([])
  return (
    <div>
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/manageitems"
          element={
            <ProtectAuth>
              <ManageItems />
            </ProtectAuth>
          }
        ></Route>
        <Route
          path="additems"
          element={
            <ProtectAuth>
              <AddItems />
            </ProtectAuth>
          }
        ></Route>
        <Route
          path="myitems"
          element={
            <ProtectAuth>
              <MyItems />
            </ProtectAuth>
          }
        ></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
