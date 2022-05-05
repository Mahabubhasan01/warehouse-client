import React, { useState } from "react";
import './ManageItems.css'
import { useNavigate, useParams } from "react-router-dom";
import useItemDetail from "../CustomHooks/useItemDetail";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useMyItmes from "../CustomHooks/useMyItems";
import CustomSubmit from "./CustomSubmit/CustomSubmit";

const ManageItems = () => {
  const [user, loading, error] = useAuthState(auth);
  

  let { id } = useParams();
  const [item] = useItemDetail(id);
  const navigate = useNavigate();
  const [addItems] = useMyItmes();
/*   const [itemsWithQuantity] = addItems.find(items=>items.name == item.name);
 */  console.log(addItems)
 const [addQ,setAddq] = useState(133)
  const addQuantity = () =>{
    setAddq(parseInt(addItems+1))
  }
  console.log(item);
  return (
    <div>
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
              <p className="card-text"> Quantity : {addQ}</p>
              <p className="card-text">
                <small className="text-muted"> Supplier : {item.supplier}</small>
                
              </p>
              <p className="btn-two"><button onClick={()=>addQuantity} className="btn-product">Stock In</button>
          <button onClick={()=>addQuantity} className="btn-product">Deliver</button>
           <button className="btn-product" onClick={()=>navigate(`/payment/${item._id}`)}
          >Checkout</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CustomSubmit></CustomSubmit>
    </div>
  );
};

export default ManageItems;
