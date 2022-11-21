package com.mini_project.service;

import com.mini_project.model.Orders;

import java.time.LocalDate;
import java.util.List;

public interface DashBoardService {

    public List<Orders> getTodaySales();
    public List<Orders> getLastWeekSales();
    public List<Orders> getLastMonthSales();
    public List<Orders> getSalesBetween( LocalDate from , LocalDate to );
    public List<Orders> getMostSoldItems();
    public List<Orders> highestRatedProduct();
    public List<Orders> mostSoldItemInGivenRange( Integer from , Integer to );
    public List<Orders> mostSoldProductFromEveryCategory();

}
