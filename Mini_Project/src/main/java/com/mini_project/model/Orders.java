package com.mini_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Orders {

    @Id
    private Integer id;

    @OneToOne
    @JsonIgnore
    private Address orderAddress;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private UserModel user;


    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private List<OrderItemQuantity> itemList = new ArrayList<>();

}
