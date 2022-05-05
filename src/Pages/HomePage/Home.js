import Count from "./Count/Count";
import "./Home.css";
import Banner from "./Navbar/Banner/Banner";
import Arrival from "./NewArrival/Arrival";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Arrival></Arrival>
      <Count></Count>
    </div>
  );
};

export default Home;
