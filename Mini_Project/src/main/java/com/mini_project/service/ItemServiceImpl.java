package com.mini_project.service;

import com.mini_project.model.Items;
import com.mini_project.repository.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.constraints.NotNull;
import java.util.List;

public class ItemServiceImpl implements ItemsService{


    @Autowired
    ItemsRepository itemsRepository;


    @Override
    public List<Items> getItemAllItems() {
        return itemsRepository.findAll();
    }


    @Override
    public List<Items> searchItemsByName(String itemName) {

        return itemsRepository.findAllByNameContains( itemName ).
                                orElseThrow(()->
                                        new RuntimeException("Not Items found"));
    }


    @Override
    public List<Items> searchItemsByPrice(Integer itemPrice) {

        return itemsRepository.findAllByPrice( (double)itemPrice ).orElseGet( ()->{
            return itemsRepository
                    .findAllByPriceIsBetween((double)itemPrice-500 , (double)itemPrice+500)
                    .orElseThrow(()-> new RuntimeException("No Items found"));
        } );
    }


    @Override
    public List<Items> searchItemsInPriceRange(Integer low, Integer high) {


        return itemsRepository
                .findAllByPriceIsBetween( (double)low , (double)high  )
                .orElseThrow(()->new RuntimeException("No Items found"));
    }


    @Override
    public List<Items> searchItemsByCategory(String type) {



        return null;
    }


    @Override
    public List<Items> sortItemsByPriceHighToLow( Double price ) {

        return itemsRepository.findAllByPriceBeforeOrderByPriceDesc( price )
                              .orElseThrow( ()-> new RuntimeException("No Items Found"));

    }


    @Override
    public List<Items> sortItemsByPriceLowToHigh(
                                                @NotNull(message = "Price cannot be blank")
                                                Double price
    )
    {

        List<Items> ls = itemsRepository.findAllByPriceBeforeOrderByPriceAsc(price)
                                        .orElseThrow( ()->new RuntimeException("No Items found") );

        return ls;
    }
}
