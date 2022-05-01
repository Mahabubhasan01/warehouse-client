import React from "react";

const Indoor = ({ item }) => {
  const { name, img, price, info, supplier } = item;
  return (
    <div className="col-md-4 p-20  card-box">
      <div class="card single-card">
        <img className="" class="card-img-top" src={img} alt="" />
        <div class="card-body">
          <h5 class="card-title">Name : {name}</h5>
          <p>Price : ${price}</p>
          <p class="card-text ">{info} </p>
          <p>Supplier : {supplier}</p>
          <button className="btn-product">Buy Now</button>
        </div>
       
      </div>
    </div>
  );
};

export default Indoor;
