package com.mini_project.repository;

import com.mini_project.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepo extends JpaRepository< Address , Integer > {



}
