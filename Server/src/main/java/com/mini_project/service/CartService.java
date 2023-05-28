package com.mini_project.service;

import com.mini_project.model.Cart;
import com.mini_project.model.Items;

public interface CartService {

    Cart addItemToCart( Long id );

    Cart getCartInfo();

    Cart removeItemFromCart( Integer item );

    Double totalCartAmount();

    Cart increaseQuantity(Long itemId);

    Cart decreaseQuantity(Integer itemId);

}
