import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name,img,price,quantity,info,supplier} = product
    return (
        <div>
            <img src={img} alt="" />
            <p>{price}</p>
            <div>
            
            <p>{quantity}</p>
            <p>{info}</p>
            <p>{supplier}</p>
            </div>
        </div>
    );
};

export default Product;