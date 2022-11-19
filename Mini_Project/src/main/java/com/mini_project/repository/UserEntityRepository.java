package com.mini_project.repository;

import com.mini_project.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserEntityRepository extends JpaRepository<UserModel, Integer> {
}
