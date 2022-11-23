package com.mini_project.service;

import com.mini_project.model.Orders;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    public Orders orderItemsFromCart(Integer addressId);

    public List<Orders> getOrderDetail();
    

}
