import React from 'react';
import './Products.css'
import Product from './Product/Product';
 import useProductsHook from '../../CustomHooks/ProductsHook.js'
import Product1 from './Product/Product1';


const Products = () => {
    const [products,setProducts] = useProductsHook([]);
    console.log(products)
    return (
        <div className='container ml-8'>
            <div className=' container products'>
                {
                    products.slice(0,3).map(p=><Product
                    key={p._id}
                    product={p}
                    ></Product>)
                }
            </div>
            <div className=' container products mt-6'>
                {
                    products.slice(3,6).map(p=> <Product1
                    key={p._id}
                    product1={p}
                    ></Product1>)
                }
            </div>
            
        </div>
    );
};

export default Products;