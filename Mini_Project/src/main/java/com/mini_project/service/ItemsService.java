package com.mini_project.service;

import com.mini_project.model.Cart;
import com.mini_project.model.Items;
import com.mini_project.model.Orders;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ItemsService {

    Items getItem(Integer itemId);

    List<Items> getAllItems();

    List<Items> searchItemsByName(String itemName);

    List<Items> searchItemsByPrice(String name, Integer itemPrice);

    List<Items> searchItemsInPriceRange(String name , Integer low , Integer high);

    List<Items> searchItemsByCategory(String type);

    List<Items> sortItemsByPriceHighToLow(String name);

    List<Items> sortItemsByPriceLowToHigh( String name);


}
