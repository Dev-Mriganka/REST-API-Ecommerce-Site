package com.mini_project.service;

import com.mini_project.model.Items;
import com.mini_project.model.Orders;
import com.mini_project.model.UserModel;
import com.mini_project.repository.ItemsRepository;
import com.mini_project.repository.OrdersRepo;
import com.mini_project.repository.UserEntityRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
public class DashBoardServiceImpl implements DashBoardService{

    @Autowired
    private OrdersRepo ordersRepo;

    @Autowired
    private ItemsRepository itemsRepository;

    @Autowired
    private UserEntityRepository userEntityRepository;


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


    @Override
    public Items addNewItem(Items items) {

        if( itemsRepository.existsByImage( items.getImage() ) )
            throw new RuntimeException( "Item already preset in Id" );

        return itemsRepository.save(items);

    }

    @Override
    public Items updateItem(Items items) {

        Items item = itemsRepository.findById(items.getId()).
                orElseThrow(()-> new
                        RuntimeException("Item not found, updation failed"));
        item.setName(items.getName());
        item.setDescription(items.getDescription());
        item.setPrice(items.getPrice());
        item.setImage(items.getImage());
        item.setCategory(items.getCategory());

        return itemsRepository.save(item);
    }

    @Override
    public Items deleteItem(Integer itemId) {

        Items item = itemsRepository.findById(itemId).orElseThrow(() -> new RuntimeException("Invalid Item id"));

        itemsRepository.delete(item);

        return item;
    }

    @Override
    public UserModel getUserDetails(Integer userId) {

           Optional<UserModel> opt =  userEntityRepository.findById(userId);

           if(opt.isPresent()) return opt.get();

           throw  new RuntimeException("No Detail Found With this id");
    }

    @Override
    public List<Orders> getUserOrderDetails(Integer userId) {

        UserModel user = userEntityRepository.findById(userId).
                orElseThrow(() -> new RuntimeException("Invalid user Id : " + userId));

        List<Orders> order = user.getOrders();

        if(order.size() == 0) throw new RuntimeException("There is no order placed by user");

        return order;
    }


}
