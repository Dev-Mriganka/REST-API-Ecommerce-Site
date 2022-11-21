package com.mini_project.repository;

import com.mini_project.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart , Integer> {

}
