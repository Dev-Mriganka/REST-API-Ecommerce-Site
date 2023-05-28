package com.mini_project.service;

import com.mini_project.model.Items;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public interface ItemsService {

    Items getItem(Long itemId);

    List<Items> getAllItems();

    Page<Items> getAllItems(String searchQuery, Map<String, String> specification, Pageable pagable);

    List<Items> searchItemsByName(String itemName);

    List<Items> searchItemsByPrice(String name, Integer itemPrice);

    List<Items> searchItemsInPriceRange(String name , Integer low , Integer high);

    List<Items> searchItemsByCategory(String type);

    List<Items> sortItemsByPriceHighToLow(String name);

    List<Items> sortItemsByPriceLowToHigh( String name);


}
