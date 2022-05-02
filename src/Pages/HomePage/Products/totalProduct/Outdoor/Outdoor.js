import React from "react";

const Outdoor = ({ item2 }) => {
  const { name, img, price, info, supplier } = item2;
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
          <button className="btn-product">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
