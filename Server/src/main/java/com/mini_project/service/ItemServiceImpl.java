package com.mini_project.service;

import com.mini_project.model.Items;
import com.mini_project.repository.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class ItemServiceImpl implements ItemsService{


    @Autowired
    ItemsRepository itemsRepository;


    @Override
    public Items getItem(Long itemId){

        return itemsRepository.findById( itemId )
                .orElseThrow( ()-> new RuntimeException("Item doesn't exsist") );
    }

    @Override
    public List<Items> getAllItems() {
        return itemsRepository.findAll();
    }

    @Override
    public Page<Items> getAllItems(String searchQuery, Map<String, String> filters, Pageable pagable) {
        Specification<Items> specification = Specification.where(null);

        if (searchQuery != null && !searchQuery.isEmpty()) {
            specification = specification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%" + searchQuery.toLowerCase() + "%"));
        }

        if (filters != null && !filters.isEmpty()) {
            for (Map.Entry<String, String> entry : filters.entrySet()) {
                String key = entry.getKey();
                String value = entry.getValue();

                specification = specification.and((root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get(key), value));
            }
        }

        return itemsRepository.findAll(specification, pagable);
    }


    @Override
    public List<Items> searchItemsByName(String itemName) {
        return itemsRepository.findAllByNameContains( itemName )
                              .orElseThrow(()->
                                        new RuntimeException("Not Items found"));
    }


    @Override
    public List<Items> searchItemsByPrice(String name, Integer itemPrice) {

        return itemsRepository.findAllByNameAndPrice( name, (double)itemPrice ).orElseGet( ()-> itemsRepository
                .findAllByNameAndPriceIsBetween( name, (double)itemPrice-500 , (double)itemPrice+500)
                .orElseThrow(()-> new RuntimeException("No Items found")));
    }


    @Override
    public List<Items> searchItemsInPriceRange(String name , Integer low, Integer high) {


        return itemsRepository
                .findAllByNameAndPriceIsBetween(name , (double)low , (double)high)
                .orElseThrow(()->new RuntimeException("No Items found"));
    }


    @Override
    public List<Items> searchItemsByCategory(String type) {

        return itemsRepository.findAllByCategory( type )
                .orElseThrow(()-> new RuntimeException("No product Found with this Category"));

    }


    @Override
    public List<Items> sortItemsByPriceHighToLow(String name) {

        return itemsRepository.findAllByNameContainsOrderByPriceDesc(name)
                              .orElseThrow( ()-> new RuntimeException("No Items Found"));

    }


    @Override
    public List<Items> sortItemsByPriceLowToHigh(String name) {

        return itemsRepository.findAllByNameContainsOrderByPriceAsc(name)
                                        .orElseThrow( ()->new RuntimeException("No Items found") );

    }


}
