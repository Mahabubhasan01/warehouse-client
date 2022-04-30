import React from 'react';

const Outdoor = ({item2}) => {
    const {name} = item2
    console.log(item2)
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Outdoor;