package com.mini_project.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToOne
    private Address orderAddress;

    @ManyToOne
    @JsonIgnore
    private UserModel user;

    private Date orderDate;

    @Pattern(regexp = "^(Placed | Shipped | OutForDelivery | Delivered | Failed)")
    private String orderStatus;

    @OneToMany(cascade = CascadeType.ALL)
    private List<OrderItemQuantity> itemList = new ArrayList<>();


}
