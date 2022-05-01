import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItems from "./Pages/AddItems/AddItems";
// import useProductsHook from './Pages/CustomHooks/ProductsHook'
import Footer from "./Pages/HomePage/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/HomePage/LogIn/Login";
import CustomNavbar from "./Pages/HomePage/Navbar/CustomNavbar";
import Indoor from "./Pages/HomePage/Products/totalProduct/Indoor/Indoor";
import Office from "./Pages/HomePage/Products/totalProduct/Office/Office";
import Outdoor from "./Pages/HomePage/Products/totalProduct/Outdoor/Outdoor";
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
          path="/additems"
          element={
            <ProtectAuth>
              <AddItems />
            </ProtectAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <ProtectAuth>
              <MyItems />
            </ProtectAuth>
          }
        ></Route>
        <Route path="/indoor" element={<Indoor/>}></Route>
        <Route path="/office" element={<Office/>}></Route>
        <Route path="/outdoor" element={<Outdoor/>}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
      {/* https://stackoverflow.com/questions/72066947/react-usestate-useeffect?noredirect=1#comment127337560_72066947 */}
    </div>
  );
}

export default App;
