import React from "react";
import "./Additems.css";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItems = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data,event) => {

    console.log(data)
    
    if(data){
      const url = `https://cryptic-plains-63507.herokuapp.com/product`;
      fetch(url,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
      }).then(res=>res.json()).then(product=>console.log(product))
      toast.success('Successfully added new product')
    }
    else{
      toast('Opps please insert value below!!')
    }
    event.target.reset()
  };

  return (
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
          className="my-3"
          {...register("name",{ required: true })}
        />
        <p>Product Info</p>
        <input
          placeholder="Enter product info"
          className="mb-3 p-5"
          {...register("info")}
        />
        <p>Prices</p>
        <input placeholder="Price" className="mb-3" {...register("price",{ required: true })} />
        <p>Quantity</p>
        <input
          placeholder="quantity"
          className="mb-3"
          {...register("quantity",{ required: true })}
        />
        <p>Image url</p>

        <input
          placeholder="photo url"
          className="mb-3"
          {...register("img", { required: true })}
        />
        <p>Supplier</p>

        <input
          placeholder="photo url"
          className="mb-3"
          {...register("supplier", { required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItems;
