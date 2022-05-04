import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product1.css";

const Product1 = ({ product1 }) => {
  const { name, img, price, info, supplier,_id } = product1;
  const navigate = useNavigate()
  return (
    <div className="col-md-4 p-20  card-box">
      <div className="card single-card ">
        <img  className="card-img-top" src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <p>Price : ${price}</p>
          <p className="card-text ">{info} </p>
          <p>Supplier : {supplier}</p>
          <button onClick={()=>navigate(`/manageitems/${_id}`)}
          className="btn-product">Manage Item</button>
        </div>
      </div>
    </div>
  );
};

export default Product1;
