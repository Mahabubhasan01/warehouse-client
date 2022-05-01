import "./Products.css";
import Product from "./Product/Product";
import useProductsHook from "../../CustomHooks/ProductsHook.js";
import Product1 from "./Product/Product1";
import Indoor from "./totalProduct/Indoor/Indoor";
import Office from "./totalProduct/Office/Office";
import Outdoor from "./totalProduct/Outdoor/Outdoor";

const Products = () => {
  const [product] = useProductsHook([]);
  const [products, allProduct] = useProductsHook([]);
  console.log(allProduct);

  return (
    <div className="container ml-8">
      <div className=" container products">
        {product.slice(0, 3).map((p) => (
          <Product key={p._id} product={p}></Product>
        ))}
      </div>
      <div className=" container products mt-6">
        {product.slice(3, 6).map((p) => (
          <Product1 key={p._id} product1={p}></Product1>
        ))}
      </div>
      {/* extra section all product or sub routing  */}
      <div>
          <h1 className="text-center mt-10">Indoor Items</h1>
        <div className="row">
          {allProduct.slice(0, 6).map((item) => (
            <Indoor key={item._id} item={item}></Indoor>
          ))}
        </div>
      </div>

      <div>
          <h1 className="text-center">Office Items</h1>
      <div className="row">
        {allProduct.slice(6, 12).map((item1) => (
          <Office key={item1._id} item1={item1}></Office>
        ))}
      </div>
      </div>


     <div >
         <h1 className="text-center">Outdoor Items</h1>
     <div className="row">
        {allProduct.slice(10, 16).map((item2) => (
          <Outdoor key={item2._id} item2={item2}></Outdoor>
        ))}
      </div>
     </div>
    </div>
  );
};

export default Products;
