import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const CustomSubmit = () => {
  const { register, handleSubmit } = useForm();
  const [user, loading, error] = useAuthState(auth);

  // form submit
  const onSubmit = (data, event) => {
    const url = `http://localhost:5000/myItems`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Stock out");
        toast("done");
      });
  };

  return (
    <div>
      <div className="w-50 mx-auto form-box container-fluid">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder=""
            value={user.email}
            readOnly
            className="my-3"
            {...register("email", { required: true })}
          />
          <p>Product Name</p>

          <input
            placeholder="Enter your product name"
            className="my-3"
            {...register("name", { required: true })}
          />
          <p>Product Info</p>
          <input
            placeholder="Enter product info"
            className="mb-3 p-5"
            {...register("info")}
          />
          <p>Prices</p>

          <input
            placeholder="Price"
            className="mb-3"
            {...register("price", { required: true })}
          />
          <p>Quantity</p>
          <input
            placeholder="quantity"
            className="mb-3"
            {...register("quantity", { required: true })}
          />
          <p>Image url</p>

          <input
            placeholder="photo url"
            className="mb-3"
            {...register("img", { required: true })}
          />
          <p>Supplier</p>

          <input
            placeholder="supplier"
            className="mb-3"
            {...register("supplier", { required: true })}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CustomSubmit;
