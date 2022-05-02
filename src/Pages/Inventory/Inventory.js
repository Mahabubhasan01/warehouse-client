import React from 'react';
import useProductsHook from '../CustomHooks/ProductsHook'
import Items from './Items/Items';

const Inventory = () => {
    const [products] = useProductsHook();
    console.log(products)

    
    return (
        <div className='row'>
            {
                products.slice(0,9).map(item=><Items
                key={item._id}
                item={item}
                ></Items>)
            }
        </div>
    );
};

export default Inventory;