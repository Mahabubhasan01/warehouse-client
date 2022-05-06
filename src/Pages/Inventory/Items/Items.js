import React from "react";
import { useNavigate } from "react-router-dom";
import useProductsHook from '../../CustomHooks/ProductsHook'
import { toast } from "react-toastify";

const Items = ({ item }) => {
  const navigate = useNavigate();
  const { name, img, price, info, supplier,_id,quantity } = item;
  const [products,setProducts] = useProductsHook();

  const handleDelete = id =>{
    const proceed = window.confirm('Are you wanna this ',name)
    if(proceed){
      const url = `http://localhost:5000/product/${id}`;
    fetch(url,{
      method:'DELETE',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify()
    }).then(res=>res.json()).then(deleteItem=>{
      console.log(deleteItem);
      const rest = products.filter(product =>product._id!==id);
      setProducts(rest)
      toast('Successfully delete ',name)
    })
    
    }

  }
  return (
    <div className="col-12 col-sm-6 col-md-3 col-lg-4 my-3   card-box">
      <div className="card single-card">
        <img className="card-img-top" src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title">Name : {name}</h5>
          <p>Price : ${price}</p>
          <p>Quantity : {quantity}</p>
          <p className="card-text ">{info} </p>
          <p>Supplier : {supplier}</p>
          <p className="btn-two">
          <button onClick={()=>navigate(`/manageitems/${_id}`)} className="btn-product">Manage Item</button><button
           onClick={()=>handleDelete(`${_id}`)} className="btn-product">Delete</button>
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Items;
