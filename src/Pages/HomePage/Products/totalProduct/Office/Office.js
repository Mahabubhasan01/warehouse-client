import React from 'react';

const Office = ({item1}) => {
    const {name} = item1
    return (
        <div>
           <h3>{name}</h3> 
        </div>
    );
};

export default Office;