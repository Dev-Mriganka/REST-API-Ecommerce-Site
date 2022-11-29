package com.mini_project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.mini_project.model.*;

import java.util.Set;

import java.util.HashSet;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {

    private Integer id;

    private String name;

    private String mobileNumber;

    private String email;

    private Set<Address> address = new HashSet<>();

    private Cart cart;

}
