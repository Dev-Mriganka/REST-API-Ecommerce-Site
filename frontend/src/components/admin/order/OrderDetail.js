import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderService from "../../../services/OrderService";
import Navbar from "../general/Navbar";
import Order from "./Order";

const OrderDetail = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await OrderService.getAllOrders();
        setOrders(response.data);
        console.log(response.data[0].id);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const updateOrder = (e, id) => {
    console.log("Hello World");
    e.preventDefault();

    navigate(`/updateorder/${id}`);
  };

  return (
    <>
      <Navbar />
      <div class="flex flex-col m-6">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="border-b dark:bg-gray-900 bg-gray-900">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      OrderId
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Order Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Payment Status
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Payment Method
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Amount(&#8360;)
                    </th>

                    <th
                      scope="col"
                      class="text-sm text-right font-medium text-white px-6 py-4"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                {loading || orders == null ? (
                  <h1>Order is null</h1>
                ) : (
                  !loading && (
                    <tbody>
                      {orders.map((ord) => (
                        <Order
                          key={ord.id}
                          order={ord}
                          updateOrder={updateOrder}
                        />
                      ))}
                    </tbody>
                  )
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
