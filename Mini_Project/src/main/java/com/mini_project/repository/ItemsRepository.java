package com.mini_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mini_project.model.Items;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface ItemsRepository extends JpaRepository<Items , Integer> {

//    No feild with category present sushank
//    List<Items> findByCategory(String category);

    public Optional<List<Items>> findAllByNameContains(String name);

    public Optional< Items > findByName( String name );
    public Optional<List<Items>> findAllByPrice(Double price);
    public Optional<List<Items>> findAllByPriceIsBetween(Double price, Double price2);
    public Optional<List<Items>> findAllByPriceBeforeOrderByPriceDesc(Double price);

    public Optional<List<Items>> findAllByPriceBeforeOrderByPriceAsc(Double price);
}

