package com.mini_project.cotroller;

import com.mini_project.model.Items;
import com.mini_project.service.ItemsService;
import com.mini_project.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController("v1/mini")
public class UserController {

//    view profile
//    update mobile no
//    delete address
//    view order
//    cancel orders
//    update orders
//    make order
//    make payment

    @Autowired
    private ItemsService itemsService;

    @Autowired
    private OrderService orderService;


    @GetMapping()
    public ResponseEntity<List<Items>> getAllItems(  ){

        List<Items> ls = itemsService.getItemAllItems();
        return null;
    }



}
