import React from "react";
import './ManageItems.css'
import { useNavigate, useParams } from "react-router-dom";
import useItemDetail from "../CustomHooks/useItemDetail";

const ManageItems = () => {
  const { id } = useParams();
  const [item] = useItemDetail(id);
  const navigate = useNavigate();

  console.log(item);
  return (
    <div className="mt-5">
      <div className="card mb-3 container-fluid "  >
        <div className="row g-0 card-item">
          <div className="col-md-6 ">
            <img src={item.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-6 ">
            <div className="card-body">
              <h5 className="card-title">Name : {item.name}</h5>
              <p className="card-text"> Information : {item.info}</p>
              <p className="card-text"> Quantity : {item.quantity}</p>
              <p className="card-text">
                <small className="text-muted"> Supplier : {item.supplier}</small>
                
              </p>
              <p className="btn-two"><button onClick={()=>navigate('/inventory')} className="btn-product">Stock In</button>
          <button onClick={()=>navigate(`/manageitems/`)} className="btn-product">Deliver</button>
           <button className="btn-product" onClick={()=>navigate(`/payment/${item._id}`)}
          >Checkout</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
