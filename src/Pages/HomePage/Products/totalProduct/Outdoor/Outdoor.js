import React from 'react';

const Outdoor = ({item2}) => {
    const {name,img,price,info,supplier} = item2;
    console.log(item2)
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Outdoor;