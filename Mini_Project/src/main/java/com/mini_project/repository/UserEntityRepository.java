package com.mini_project.repository;

import com.mini_project.model.*;

import com.mini_project.model.UserModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserEntityRepository extends JpaRepository<UserModel, Integer> {

    Optional<UserModel> findByEmail(String email);

    Boolean existsByEmail(String email);

    public Optional<UserModel> findByEmail(String email);

    public boolean existsByEmail(String email);


}
