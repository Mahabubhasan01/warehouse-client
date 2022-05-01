import React from 'react';

const Office = ({item1}) => {
    const {name,img,price,info,supplier} = item1;
    return (
        <div>
            <img src={img} alt="" />
           <h3>{name}</h3> 
        </div>
    );
};

export default Office;