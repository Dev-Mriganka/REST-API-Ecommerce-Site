package com.mini_project.service;

import com.mini_project.model.Orders;

import java.util.List;

public interface OrderService {

    Orders orderItemsFromCart(Integer addressId);

    List<Orders> getOrderDetail();

    String cancelOrder (Integer orderId);

    Orders getSingleOrder(Integer orderId);

    Orders changeOrderStatus(Integer orderId , String Status);

}
