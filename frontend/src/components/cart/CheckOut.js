import React, { useState } from "react";
import swal from "sweetalert";
import OrderService from "../../services/OrderService";

const CheckOut = (props) => {
  const { quantity, totalCost } = props;

  const [order, setOrder] = useState({
    paymentMethod: "online-payment",
  });

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setOrder({ ...order, paymentMethod: { value } });
  // };

  const placeOrder = () => {
    OrderService.placeOrder(order)
      .then((res) => {
        swal({
          title: res.data,
          icon: "success",
        });
        console.log(res.data);
      })
      .catch((err) => {
        swal({
          title: err.response.data.message,
          icon: "error",
        });
        console.log(err);
      });
  };

  return (
    <div id="summary" className="w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">Items </span>
        <span className="font-semibold text-sm uppercase">{quantity}</span>
      </div>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>&#8360; {totalCost}</span>
        </div>
        {/* 
        <div className="my-4">
          <div class="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="online-payment"
              name="default-radio"
              onClick={(e) => {
                handleChange(e);
              }}
              class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Online-Payment
            </label>
          </div>
          <div class="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value="cash-on-delivery"
              name="default-radio"
              onClick={(e) => {
                handleChange(e);
              }}
              class="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-radio-2"
              class="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Cash-On-Delivery
            </label>
          </div>
        </div> */}

        <button
          onClick={placeOrder}
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
