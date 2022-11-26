package com.mini_project.service;

import com.mini_project.model.Cart;
import com.mini_project.model.Items;
import com.mini_project.model.Orders;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ItemsService {

    public List<Items> getItemAllItems();
    public List<Items> searchItemsByName( String itemName );
    public List<Items> searchItemsByPrice( Integer itemPrice );
    public List<Items> searchItemsInPriceRange( Integer low , Integer high );
    public List<Items> searchItemsByCategory( String type );

    List<Items> sortItemsByPriceHighToLow(Double price);

    public List<Items> sortItemsByPriceLowToHigh(Double price);


}
