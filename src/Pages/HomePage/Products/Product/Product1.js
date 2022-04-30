import React from 'react';
import './Product1.css'

const Product1 = ({product1}) => {
    const {name,img,price,quantity,info,supplier} = product1
    return (
        <div className='product1-box'>
            <img className='mb-10' src={img} alt="" />
            <div>
            
            </div>
        </div>
    );
};

export default Product1;