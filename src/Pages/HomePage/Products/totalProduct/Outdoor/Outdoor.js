import React from "react";

const Outdoor = ({ item2 }) => {
  const { name, img, price, info, supplier } = item2;
  console.log(item2);
  return (
    <div className="col-md-4 p-20 card-box">
      <div class="card single-card">
        <img class="card-img-top" src={img} alt="" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">{info} </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">{supplier}</small>
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
