package com.mini_project.service;

import com.mini_project.model.Orders;
import com.mini_project.repository.OrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Calendar;

@Service
public class DashBoardServiceImpl implements DashBoardService{

    @Autowired
    private OrdersRepo ordersRepo;

    public List<Orders> getTodaySales(){

         new Date(Calendar.getInstance().getTimeInMillis());
        List<Orders> orders = ordersRepo.getTodaysSale(localDate);

        if(orders.size() == 0) throw new RuntimeException("no sales recorded for : " + localDate);

        return orders;
    }


    public List<Orders> getLastWeekSales(){



    }


    public List<Orders> getLastMonthSales(){

        return null;
    }


    public List<Orders> getSalesBetween(LocalDate from , LocalDate to ){

        return null;
    }


    public List<Orders> getMostSoldItems(){

        return null;
    }


    public List<Orders> highestRatedProduct(){

        return null;
    }


    public List<Orders> mostSoldItemInGivenRange( Integer from , Integer to ){

        return null;
    }


    public List<Orders> mostSoldProductFromEveryCategory(){

        return null;
    }
}
