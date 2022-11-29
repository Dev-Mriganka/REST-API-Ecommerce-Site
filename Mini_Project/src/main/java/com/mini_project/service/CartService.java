package com.mini_project.service;

import com.mini_project.model.Cart;
import com.mini_project.model.Items;

public interface CartService {

    Cart addItemToCart( Integer id );

    Cart getCartInfo();

    Cart removeItemFromCart( Integer item );

    Double totalCartAmount();

    Cart increaseQuantity(Integer itemId);

    Cart decreaseQuantity(Integer itemId);

}
