import React from "react";

const Office = ({ item1 }) => {
  const { name, img, price, info, supplier } = item1;
  return (
    <div className="col-md-4 p-5 ">
      <div class="card ">
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

export default Office;
