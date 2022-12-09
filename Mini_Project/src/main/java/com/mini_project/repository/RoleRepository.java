package com.mini_project.repository;

import com.mini_project.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    Optional<Role> findByRole(String role);
    boolean existsByRole(String role);

}
