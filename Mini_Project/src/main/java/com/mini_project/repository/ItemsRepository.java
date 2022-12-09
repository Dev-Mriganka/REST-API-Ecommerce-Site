package com.mini_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mini_project.model.Items;

import java.util.List;
import java.util.Optional;

public interface ItemsRepository extends JpaRepository<Items , Integer> {

//    No feild with category present sushank
//    List<Items> findByCategory(String category);

    Optional<List<Items>> findAllByNameContains(String name);

    Optional< Items > findByName(String name);

    Optional<List<Items>> findAllByNameAndPrice(String name, Double price);

    Optional<List<Items>> findAllByNameAndPriceIsBetween(String name, Double price, Double price2);

    Optional<List<Items>> findAllByNameOrderByPriceDesc(String name);

    boolean existsByImage(String url);

    Optional<List<Items>> findAllByNameOrderByPriceAsc(String name);

    Optional<List<Items>> findAllByCategory(String category);
}
