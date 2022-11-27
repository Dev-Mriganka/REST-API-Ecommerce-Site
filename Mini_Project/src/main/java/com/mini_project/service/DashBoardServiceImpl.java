package com.mini_project.service;

import com.mini_project.model.Orders;
import com.mini_project.repository.OrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.List;

@Service
public class DashBoardServiceImpl implements DashBoardService{

    @Autowired
    private OrdersRepo ordersRepo;

    public List<Orders> getTodaySales(){


        List<Orders> orders = ordersRepo.getTodaysSale(new Date(Calendar.getInstance().getTimeInMillis()));

        if(orders.size() == 0) throw new RuntimeException("no sales recorded for : " + new Date(Calendar.getInstance().getTimeInMillis()));

        return orders;
    }

    @Override
    public List<Orders> getAllOrders() {

           List<Orders> orders = ordersRepo.findAll();

           if(orders.size() == 0) throw new RuntimeException("no orders recorded");

           return orders;
    }


}
