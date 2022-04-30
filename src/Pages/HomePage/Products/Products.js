import React from 'react';
import './Products.css'
import Product from './Product/Product';
 import useProductsHook from '../../CustomHooks/ProductsHook.js'


const Products = () => {
    const [products,setProducts] = useProductsHook([]);
    console.log(products)
    return (
        <div>
            <div>
                {
                    products.slice(0,3).map(p=><h1 key={p._id}>{p.name}</h1>
                    
                    )
                }
            </div>
            <div>
                {
                    products.slice(3,6).map(p=><Product
                    key={p._id}
                    product={p}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;