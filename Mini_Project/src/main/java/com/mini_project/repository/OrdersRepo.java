package com.mini_project.repository;

import com.mini_project.model.Orders;
import com.mini_project.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.User;

import java.util.List;
import java.util.Optional;

public interface OrdersRepo extends JpaRepository<Orders , Integer > {


    public Optional<List<Orders>> findAllByUser(UserModel user);
}
