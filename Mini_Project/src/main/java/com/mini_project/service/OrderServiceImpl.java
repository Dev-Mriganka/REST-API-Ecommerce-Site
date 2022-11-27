package com.mini_project.service;

import com.mini_project.model.*;
import com.mini_project.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import java.time.*;
import java.util.*;
import java.util.List;
@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    ManageUserService userService;

    @Autowired
    AddressRepo addressRepo;

    @Autowired
    UserEntityRepository userEntityRepository;

    @Autowired
    OrdersRepo ordersRepo;

    @Override
    public Orders orderItemsFromCart( Integer addressId ) {

        UserModel user =  userService.getUser();

        Orders orders = new Orders();
        orders.setOrderAddress( addressRepo.findById( addressId ).orElseThrow(()-> new RuntimeException( "Please add a valid address" )) );
        orders.setUser( user );
        orders.setItemList( new ArrayList<>());

        for(ItemQuantity i:user.getCart().getItems() ){

            OrderItemQuantity orderItemQuantity = new OrderItemQuantity();

            orderItemQuantity.setItem( i.getItem() );
            orderItemQuantity.setQuantity( i.getQuantity() );
            orderItemQuantity.setTimeStamp( LocalDate.now() );

            orders.getItemList().add( orderItemQuantity );

        }
        user.getCart().setItems( new ArrayList<>() );

        userEntityRepository.save( user );
        ordersRepo.save( orders );

        return orders;
    }

    /**
     * @return Orders list of the current user
     */

    @Override
    public List<Orders> getOrderDetail() {

        UserModel userModel = userService.getUser();
        return ordersRepo.findAllByUser( userModel ).orElseThrow(()->new RuntimeException("No order made by the user"));


    }

    @Override
    public String cancelOrder(Integer orderId) {
        return null;
    }

    @Override
    public Orders updateOrder(Integer addressId) {
        return null;
    }

    @Override
    public Orders getSingleOrder(Integer orderId) {
        return null;
    }


}
