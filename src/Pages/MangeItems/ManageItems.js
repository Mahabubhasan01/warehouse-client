import React, { useState } from "react";
import './ManageItems.css'
import { useNavigate, useParams } from "react-router-dom";
import useItemDetail from "../CustomHooks/useItemDetail";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomSubmit from "./CustomSubmit/CustomSubmit";

const ManageItems = () => {
  const [user, loading, error] = useAuthState(auth);
  

  const { id } = useParams();
  const [item] = useItemDetail(id);
  const navigate = useNavigate();
  const [plus,setPlus] = useState()
  const handleDeliver =()=>{
    let deliver = 1
    let quantityPase = parseInt(item.quantity);
    let quantity = quantityPase  + deliver;
    const productInfo ={
      name:item.name,
      img:item.img,
      price:item.price,
      info:item.info,
      supplier:item.supplier,
      quantity:quantity

    }
    const url = `http://localhost:5000/product/${id}`
    fetch(url,{
      method:"PUT",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(productInfo)
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      setPlus(data)
    })
  }
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
              <p className="card-text"> Quantity : {item.quantity}</p>
              <p className="card-text">
                <small className="text-muted"> Supplier : {item.supplier}</small>
                
              </p>
              <p className="btn-two"><button onClick={()=>handleDeliver} className="btn-product">Stock In</button>
          <button className="btn-product">Deliver</button>
           <button className="btn-product" onClick={()=>navigate(`/payment`)}
          >Checkout</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <CustomSubmit></CustomSubmit> */}
    </div>
  );
};

export default ManageItems;
