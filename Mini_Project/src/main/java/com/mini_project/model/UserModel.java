package com.mini_project.model;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @NotNull(message =  "Name feild is Mandatory")
    @Size(min=3)
    @NotBlank(message = "Feild should not be null")
    private String name;

    private String mobileNumber;
    @Email(message = "Please Enter a valid Emial Address")
    private String email;

    @NonNull
    @Pattern(regexp="[a-zA-Z0-9]{8,12}",message="Password must contain between 6 to 12 characters. Must be alphanumeric with both Upper and lowercase characters.")
    private String password;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Role> roles = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL)
    private Set<Address> address = new HashSet<>();

    @OneToOne(cascade = CascadeType.ALL)
    private Cart cart;




}
