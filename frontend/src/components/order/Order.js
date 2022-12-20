import React from "react";

const Order = (props) => {
  const { order } = props;

  return (
    <>
      <tr class="border-b">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {order.id}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {order.createDateTime}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {order.orderStatus}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {order.payment.paymentStatus}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
          {order.payment.paymentMethod}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
           {order.payment.amount}
        </td>
      </tr>
    </>
  );
};

export default Order;
