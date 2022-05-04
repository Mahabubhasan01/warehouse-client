import React from "react";
import { useNavigate } from "react-router-dom";

const Outdoor = ({ item2 }) => {
  const { name, img, price, info, supplier,_id } = item2;
  const navigate = useNavigate()
  console.log(item2);
  return (
    <div className="col-md-4 p-20 card-box">
      <div className="card single-card">
        <img className="card-img-top" src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <p className="card-text">{info} </p>
          <p>Price : {price}</p>
          <p>Supplier : {supplier}</p>
          <p className="btn-two"><button onClick={()=>navigate('/inventory')} className="btn-product">Inventory</button>
          <button onClick={()=>navigate(`/manageitems/${_id}`)} className="btn-product">Manage Item</button></p>
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
