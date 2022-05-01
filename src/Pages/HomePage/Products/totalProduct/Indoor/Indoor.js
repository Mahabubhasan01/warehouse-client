import React from 'react';

const Indoor = ({item}) => {
    const {name,img,price,info,supplier} = item;
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Indoor;