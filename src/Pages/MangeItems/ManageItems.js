import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../CustomHooks/useItemDetail';

const ManageItems = () => {
    const {id} = useParams();
    const [item] = useItemDetail(id)


    console.log(item)
    return (
        <div>
            <p>Name : {item.name}</p>
            <img src={item.img} alt="" />
        </div>
    );
};

export default ManageItems;