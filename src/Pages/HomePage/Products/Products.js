import "./Products.css";
import Product from "./Product/Product";
import useProductsHook from "../../CustomHooks/ProductsHook.js";
import Product1 from "./Product/Product1";
import Indoor from "./totalProduct/Indoor/Indoor";
import Office from "./totalProduct/Office/Office";
import Outdoor from "./totalProduct/Outdoor/Outdoor";

const Products = () => {
  const [product] = useProductsHook([]);
  const [products,setProducts, allProduct] = useProductsHook([]);
  console.log(allProduct);

  return (
    <div className="container-fluid ">
      <hr />
      <h1 className="text-center text-2xl mt-10">Inventory Items</h1>
        <div className="hr"></div>
      <div className=" row container ms-2">
        {product.slice(0, 3).map((p) => (
          <Product key={p._id} product={p}></Product>
        ))}
      </div>
      <div className="  row container ms-2 mt-6">
        {product.slice(7, 10).map((p) => (
          <Product1 key={p._id} product1={p}></Product1>
        ))}
      </div>
      {/* extra section all product or sub routing  */}
      <div>
        {" "}
        <hr />
        <h1 className="text-center text-2xl mt-10">Indoor Items</h1>
        <div className="hr"></div>
        <div className="row container ms-2">
          {allProduct.slice(0, 6).map((item) => (
            <Indoor key={item._id} item={item}></Indoor>
          ))}
        </div>
      </div>

      <div>
        {" "}
        <hr />
        <h1 className="text-center text-2xl mt-5">Office Items</h1>
        <div className="hr"></div>
        <div className="row container ms-2">
          {allProduct.slice(6, 12).map((item1) => (
            <Office key={item1._id} item1={item1}></Office>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <hr />
        <h1 className="text-center text-2xl mt-5">Outdoor Items</h1>
        <div className="hr"></div>

        <div className="row container ms-2">
          {allProduct.slice(10, 16).map((item2) => (
            <Outdoor key={item2._id} item2={item2}></Outdoor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
