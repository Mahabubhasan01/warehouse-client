import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductsHook from '../CustomHooks/ProductsHook'
import Items from './Items/Items';

const Inventory = () => {
    const [products] = useProductsHook();
    const navigate = useNavigate()
    console.log(products)

    
    return (
        <div>
            <h3 className='text-center text-2xl mt-4'>Total Items : <span className='text-green-600'>{products.length}</span></h3>
            <div className='row container my-5 mx-auto'>
            {
                products.map(item=><Items
                key={item._id}
                item={item}
                ></Items>)
            }
        </div>
        <p><button onClick={()=>navigate('/additems')}
         className='btn-add '>Add new items</button></p>
        </div>
        
    );
};

export default Inventory;