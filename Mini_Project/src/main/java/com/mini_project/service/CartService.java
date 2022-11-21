package com.mini_project.service;

import com.mini_project.model.Cart;
import com.mini_project.model.Items;

public interface CartService {

    public Cart addItemToCart( Items item );
    public Cart getCartInfo();
    public String removeItemFromCart( Items item );
    public Double totalCartAmount();

}
