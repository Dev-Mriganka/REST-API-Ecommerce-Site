package com.mini_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Date;
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
    private Address orderAddress;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private UserModel user;

    private Date orderDate;

    @OneToMany(cascade = CascadeType.ALL)
    private List<OrderItemQuantity> itemList = new ArrayList<>();

}
