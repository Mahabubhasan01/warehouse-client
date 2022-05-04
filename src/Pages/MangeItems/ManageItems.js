import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useItemDetail from '../CustomHooks/useItemDetail';

const ManageItems = () => {
    const {id} = useParams();
    const [item] = useItemDetail(id);
    const navigate = useNavigate()


    console.log(item)
    return (
        <div>
            <p>Name : {item.name}</p>
            <img src={item.img} alt="" />
            <button onClick={()=>navigate(`/inventory`)} className="btn-product">Inventory</button>
        </div>
    );
};

export default ManageItems;