import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import OrderService from "../../../services/OrderService";

const UpdateOrder = () => {
  const { id } = useParams();

  console.log(id);
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    orderId: id,
    orderStatus: "",
    paymentMethod: "",
    userId: 0,
  });

  

  const handleChange = (e) => {
    const value = e.target.value;
    setOrder({
      ...order,
      [e.target.name]: value,
    });
  };

  const updateCategory = (e) => {
    e.preventDefault();

    OrderService.updateOrder(order)
      .then((res) => {
        swal({
          title: res.data,
          icon: "success",
        });
        navigate("/allorder");
      })
      .catch((err) => {
        swal({
          title: err.response.data.message,
          icon: "error",
        });
      });
  };

  return (
    <>
      <div className="flex rounded justify-center items-center w-3/4 mx-auto my-8">
        <div className="px-8 py-8">
          <div className="font-bold text-2xl tracking-wider">
            <h1>Edit Category</h1>
          </div>

          {/* Input Fields */}
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Id
            </label>
            <input
              type="number"
              name="orderId"
              value={order.orderId}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Order Status
            </label>
            <input
              type="string"
              name="orderStatus"
              value={order.orderStatus}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Payment Method
            </label>
            <input
              type="string"
              name="paymentMethod"
              value={order.paymentMethod}
              onChange={(e) => handleChange(e)}
              className="h-10 w-96 border mt-2 px-2 py-2"
            ></input>
          </div>

          {/* Buttons */}

          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              onClick={updateCategory}
              className="rounded text-white bg-green-500 hover:bg-green-700 px-6 py-2"
            >
              Update Category
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateOrder;
