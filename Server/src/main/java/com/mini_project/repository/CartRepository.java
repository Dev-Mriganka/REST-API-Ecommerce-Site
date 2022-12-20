package com.mini_project.repository;

import com.mini_project.model.Cart;
import com.mini_project.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Integer> {



}
