package com.mini_project.cotroller;

import com.mini_project.model.Orders;
import com.mini_project.service.DashBoardService;
import com.mini_project.service.DashBoardServiceImpl;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Date;
import java.util.List;

@RestController("/dashBoard")
public class DashBoardController {

    @Autowired
    private DashBoardService dashBoardService;


    @GetMapping("/daily-sales")
    public ResponseEntity<List<Orders>> getTodaySales(){

        List<Orders> orders = dashBoardService.getTodaySales();
        return new ResponseEntity<>(orders , HttpStatus.OK);
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Orders>> getAllOrders(){

        List<Orders> orders = dashBoardService.getAllOrders();
        return new ResponseEntity<>(orders , HttpStatus.OK);
    }


}
