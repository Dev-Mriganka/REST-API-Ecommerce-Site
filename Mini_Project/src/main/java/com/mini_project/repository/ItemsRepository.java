package com.mini_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mini_project.model.Items;

import java.util.List;

public interface ItemsRepository extends JpaRepository<Items , Integer> {

    List<Items> findByCategory(String category);

}
