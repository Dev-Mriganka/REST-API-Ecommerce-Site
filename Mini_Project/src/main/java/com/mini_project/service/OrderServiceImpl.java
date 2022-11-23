package com.mini_project.service;

import com.mini_project.model.Orders;
import org.springframework.beans.factory.annotation.Autowired;

public class OrderServiceImpl implements OrderService{

    @Autowired
    ManageUserService userService;

    @Override
    public Orders orderItemsFromCart() {


        
        return null;
    }
}
