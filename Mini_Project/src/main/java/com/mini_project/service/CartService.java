package com.mini_project.service;

import com.mini_project.model.Cart;
import com.mini_project.model.Items;

public interface CartService {

    public Cart addItemToCart( Integer id );
    public Cart getCartInfo();
    public String removeItemFromCart( Integer item );
    public Double totalCartAmount();

}
