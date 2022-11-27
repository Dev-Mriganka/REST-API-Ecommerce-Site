package com.mini_project.service;

import com.mini_project.model.Cart;
import com.mini_project.model.Items;
import com.mini_project.model.UserModel;
import com.mini_project.repository.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.Valid;
import java.util.ArrayList;

public class CartServiceImpl implements CartService{

    @Autowired
    private ManageUserService service;
    @Autowired
    private ItemsRepository itemsRepository;

    @Override
    public Cart addItemToCart( Integer id ) {

        UserModel user = service.getUser();
        itemsRepository.findById( id );

        if(user.getCart()==null) user.setCart( new Cart(  ) );
        Cart cart = user.getCart();
        if( cart.getItems()==null ) cart.setItems( new ArrayList<>(10) );

        cart.getItems().stream().filter( i -> {
            return i.getItem().getId() == id;
        } ) ;

        return null;
    }

    @Override
    public Cart getCartInfo() {
        return null;
    }

    @Override
    public String removeItemFromCart(Items item) {
        return null;
    }

    @Override
    public Double totalCartAmount() {
        return null;
    }

}
