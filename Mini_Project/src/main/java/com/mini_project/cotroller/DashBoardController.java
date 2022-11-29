package com.mini_project.cotroller;

import com.mini_project.model.Items;
import com.mini_project.model.UserModel;
import com.mini_project.model.Orders;
import com.mini_project.service.DashBoardService;
import com.mini_project.service.ItemsService;
import com.mini_project.service.OrderService;
import org.hibernate.id.IntegralDataTypeHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dashboard")
@PreAuthorize("hasAnyRole('ROLE_ADMIN')")
public class DashBoardController {

    @Autowired
    private DashBoardService dashBoardService;
    @Autowired
    private ItemsService itemsService;
    @Autowired
    private OrderService orderService;

    // http://localhost:8888/item
    @PostMapping("/item")
    public ResponseEntity<Items> addItem(@RequestBody Items item) {

        return new ResponseEntity<>(dashBoardService.addNewItem(item) , HttpStatus.CREATED);
    }
    // http://localhost:8888/daily-sales
    @GetMapping("/daily-sales")
    public ResponseEntity<List<Orders>> getTodaySales(){

        List<Orders> orders = dashBoardService.getTodaySales();
        return new ResponseEntity<>(orders , HttpStatus.OK);
    }
    // http://localhost:8888/orders
    @GetMapping("/orders")
    public ResponseEntity<List<Orders>> getAllOrders(){

        List<Orders> orders = dashBoardService.getAllOrders();
        return new ResponseEntity<>(orders , HttpStatus.OK);
    }
    // http://localhost:8888/items
    @GetMapping("/items")
    public ResponseEntity<List<Items>> getAllItemsHandler() {

        return new ResponseEntity<>(itemsService.getAllItems() , HttpStatus.OK);
    }
    // http://localhost:8888/item
    @PutMapping("/item")
    public ResponseEntity<Items> updateItemHandler(@RequestBody Items item){

        return new ResponseEntity<>(dashBoardService.updateItem(item) ,HttpStatus.CREATED );
    }
    // http://localhost:8888/item/{id}
    @DeleteMapping("/item/{id}")
    public ResponseEntity<Items> deleteItemHadler(@PathVariable("id") Integer id){

        return new ResponseEntity<>(dashBoardService.deleteItem(id) ,HttpStatus.CREATED );
    }
    // http://localhost:8888/order/{id}
    @GetMapping("/order/{id}")
    public ResponseEntity<Orders> getSingleOrderHandler(@PathVariable("id")Integer id) {

        return new ResponseEntity<>(orderService.getSingleOrder(id),  HttpStatus.OK);
    }
    // http://localhost:8888/order/status/{id}/{status}
    @PutMapping("/order/status/{id}/{status}")
    public ResponseEntity<Orders> updateOrderStatus(@PathVariable("id") Integer id ,  @PathVariable("status") String status) {

        return new ResponseEntity<>(orderService.changeOrderStatus(id , status) , HttpStatus.CREATED);
    }
    // http://localhost:8888/user/{id}
    @GetMapping("/user/{id}")
    public ResponseEntity<UserModel> getUserDetailsHandler(@PathVariable("id") Integer userId) {

        return new ResponseEntity<>(dashBoardService.getUserDetails(userId) , HttpStatus.OK);
    }
    // http://localhost:8888/user/order/{id}
    @GetMapping("/user/order/{id}")
    public ResponseEntity<List<Orders>> getUserOrderDetailsHandler(@PathVariable("id") Integer userId){
        return new ResponseEntity<>(dashBoardService.getUserOrderDetails(userId), HttpStatus.OK);
    }

}
/*
Admin Side Features

Product List
    Add new products

Manage Quantities

Order management
    See orders, details of orders
    Update status ( Processed, Failed, To be dispatched, out for delivery, returned )
    Search by user details ( phone, email, name, id )
    Search by order
    Orders which are cancelled or refunded
    Refund requests

User management
    See users, and details
    admin and users ( different login )

Dashboards
    sales made today
    sales made last week
    sales made last month
    sales from Jan - Dec
    highest sold product ordered by rating in given duration
    highest rated product in given duration
    highest sold product categorised under selling price
    highest sold product in different categories
*/