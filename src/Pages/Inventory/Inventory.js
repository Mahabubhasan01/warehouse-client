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
            <div className='row'>
            {
                products.slice(0,9).map(item=><Items
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