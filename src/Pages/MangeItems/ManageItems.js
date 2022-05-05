import React from "react";
import './ManageItems.css'
import { useNavigate, useParams } from "react-router-dom";
import useItemDetail from "../CustomHooks/useItemDetail";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const ManageItems = () => {
  const [user, loading, error] = useAuthState(auth);

  const { register, handleSubmit } = useForm();


  
  const { id } = useParams();
  const [item] = useItemDetail(id);
  const navigate = useNavigate();

  /* const onSubmit = (data,event) =>{
    console.log(data)
} */
  const onSubmit =()=>{
    const id = item._id
    const quantity = parseInt(item.quantity-1);
    const productInfo = {
      name:item.name,
      info:item.info,
      supplier:item.supplier,
      quantity:quantity,
    };
    const url=`http://localhost:5000/product${id}`;
    fetch(url,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(productInfo)
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      toast('Stock out')
    })

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
              <p className="card-text"> Quantity : {item.quantity}</p>
              <p className="card-text">
                <small className="text-muted"> Supplier : {item.supplier}</small>
                
              </p>
              <p className="btn-two"><button onClick={()=>navigate('/inventory')} className="btn-product">Stock In</button>
          <button onClick={()=>(`${item._id}`)} className="btn-product">Deliver</button>
           <button className="btn-product" onClick={()=>navigate(`/payment/${item._id}`)}
          >Checkout</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* addProduct */}
    <div className="w-50 mx-auto form-box container-fluid">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Enter your product name"
          value={user.email} readOnly 
          
          className="my-3"
          {...register("email",{ required: true })}
        />
        <p>Product Name</p>

        <input
          placeholder="Enter your product name"
          value={item.name}
          className="my-3"
          {...register("name",{ required: true })}
        />
        <p>Product Info</p>
        <input
          placeholder="Enter product info"
          value={item.info}
          className="mb-3 p-5"
          {...register("info")}
        />
        <p>Prices</p>
        
        <input value={item.price} placeholder="Price" className="mb-3" {...register("price",{ required: true })} />
        <p>Quantity</p>
        <input
          placeholder="quantity"
          className="mb-3"
          {...register("quantity",{ required: true })}
        />
        <p>Product Id</p>
        
        <input value={item._id} placeholder="Price" className="mb-3" {...register("price",{ required: true })} />
        <p>Quantity</p>
        <input
          placeholder="quantity"
          className="mb-3"
          {...register("quantity",{ required: true })}
        />
        <p>Image url</p>

        <input value={item.img}
          placeholder="photo url"
          className="mb-3"
          {...register("img", { required: true })}
        />
        <p>Supplier</p>

        <input value={item.supplier}
          placeholder="photo url"
          className="mb-3"
          {...register("supplier", { required: true })}
        />

        <input type="submit" />
      </form>
    </div>
    </div>
  );
};

export default ManageItems;
