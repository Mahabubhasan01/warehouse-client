import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItems from "./Pages/AddItems/AddItems";
import Blog from "./Pages/HomePage/Blogs/Blog/Blog";
import BlogDetail from "./Pages/HomePage/Blogs/BlogDetail/BlogDetail";
import Blogs from "./Pages/HomePage/Blogs/Blogs";
// import useProductsHook from './Pages/CustomHooks/ProductsHook'
import Footer from "./Pages/HomePage/Footer/Footer";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/HomePage/LogIn/Login";
import CustomNavbar from "./Pages/HomePage/Navbar/CustomNavbar";
import Product from "./Pages/HomePage/Products/Product/Product";
import Product1 from "./Pages/HomePage/Products/Product/Product1";
import Indoor from "./Pages/HomePage/Products/totalProduct/Indoor/Indoor";
import Office from "./Pages/HomePage/Products/totalProduct/Office/Office";
import Outdoor from "./Pages/HomePage/Products/totalProduct/Outdoor/Outdoor";
import SignUp from "./Pages/HomePage/SignUp/SignUp";
import Inventory from "./Pages/Inventory/Inventory";
import ManageItems from "./Pages/MangeItems/ManageItems";
import MyItems from "./Pages/MyItems/MyItems";
import Contact from "./Pages/Shared/Contact";
import Notfound from "./Pages/Shared/Notfound";
import Payment from "./Pages/Shared/Payment/Payment";
import Profile from "./Pages/Shared/Profile";
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
        <Route path="/home" element={<Home />}></Route>
        
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/manageitems/:id"
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
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/blogs/:id" element={<Blogs></Blogs>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/payment" element={<Payment></Payment>}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>

      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      {/* https://stackoverflow.com/questions/72066947/react-usestate-useeffect?noredirect=1#comment127337560_72066947 */}
    </div>
  );
}

export default App;
