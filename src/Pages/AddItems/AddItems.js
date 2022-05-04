import React from "react";
import './Additems.css'


import { useForm } from "react-hook-form";

 const AddItems=()=> {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />
      
      <input {...register("exampleRequired", { required: true })} />
      
      <input type="submit" />
    </form>
  );
}

export default AddItems;
