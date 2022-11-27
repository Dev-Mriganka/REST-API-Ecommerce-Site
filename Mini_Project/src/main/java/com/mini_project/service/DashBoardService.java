package com.mini_project.service;

import com.mini_project.model.Orders;

import java.time.LocalDate;
import java.util.List;

public interface DashBoardService {

    public List<Orders> getTodaySales();

    List<Orders> getAllOrders();

}
