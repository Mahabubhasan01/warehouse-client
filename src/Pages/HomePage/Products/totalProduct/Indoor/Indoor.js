import React from 'react';

const Indoor = ({item}) => {
    const {name} = item;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Indoor;