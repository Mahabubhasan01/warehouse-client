import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name,img,price,quantity,info,supplier} = product
    return (
        <div>
            <img src={img} alt="" />
            <div>

            </div>
        </div>
    );
};

export default Product;