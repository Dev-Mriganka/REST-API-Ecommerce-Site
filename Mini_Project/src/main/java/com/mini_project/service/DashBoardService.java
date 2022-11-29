package com.mini_project.service;

import com.mini_project.model.Items;
import com.mini_project.model.Orders;
import com.mini_project.model.UserModel;

import java.time.LocalDate;
import java.util.List;

public interface DashBoardService {

    List<Orders> getTodaySales();

    List<Orders> getAllOrders();

    Items addNewItem(Items items);

    Items updateItem(Items items);

    Items deleteItem(Integer itemId);

    UserModel getUserDetails(Integer userId);

    List<Orders> getUserOrderDetails(Integer userId);

}
