package com.mini_project.cotroller;

import com.mini_project.model.Orders;
import com.mini_project.service.DashBoardServiceImpl;
import org.hibernate.criterion.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("/dashBoard")
public class DashBoardController {

    @Autowired
    private DashBoardServiceImpl dashBoardService;

    public ResponseEntity<List<Orders>> getLastMonthSales(){
        return new ResponseEntity<>(dashBoardService.getLastMonthSales() , HttpStatus.OK);
    }

    public ResponseEntity<List<Orders>> getLastYearWeek(){
        return new ResponseEntity<>( dashBoardService.getLastWeekSales() , HttpStatus.OK );
    }


}
