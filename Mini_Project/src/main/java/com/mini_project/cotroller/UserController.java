package com.mini_project.cotroller;

import com.mini_project.model.Cart;
import com.mini_project.model.Items;
import com.mini_project.service.CartService;
import com.mini_project.service.ItemsService;
import com.mini_project.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    // view profile
    // update mobile no
    // delete address
    // view order
    // cancel orders
    // update orders
    // make order
    // make payment

    @Autowired
    private ItemsService itemsService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private CartService cartService;

    @GetMapping("/")
    public ResponseEntity<List<Items>> getAllItems() {

        List<Items> ls = itemsService.getItemAllItems();
        return new ResponseEntity<>(ls, HttpStatus.OK);

    }

    public ResponseEntity<List<Items>> getItemsByCategory( String category) {

        return new ResponseEntity<>(itemsService.searchItemsByCategory(category), HttpStatus.OK);

    }

    @GetMapping("/items/{price}")
    public ResponseEntity<List<Items>> getItemByPrice(@PathVariable("price") Integer itemprice) {

        List<Items> itemsList = itemsService.searchItemsByPrice(itemprice);

        return new ResponseEntity<List<Items>>(itemsList, HttpStatus.ACCEPTED);

    }

    @GetMapping("/items/range/{low}/{high}")
    public ResponseEntity<List<Items>> itemsInRange(@PathVariable("low") Integer low,
            @PathVariable("high") Integer high) {

        return new ResponseEntity<List<Items>>(itemsService.searchItemsInPriceRange(low, high), HttpStatus.OK);

    }

    // @GetMapping("/items/{price}")
    // public ResponseEntity<List<Items>> itemsLowToHigh(@PathVariable("price")
    // Double price){
    //
    // return new ResponseEntity<List<Items>>(
    // itemsService.sortItemsByPriceLowToHigh(price), HttpStatus.OK);
    //
    // }

    @GetMapping("/items")
    public ResponseEntity<List<Items>> itemsHighToLow(@RequestParam Double price) {

        return new ResponseEntity<List<Items>>(itemsService.sortItemsByPriceHighToLow(price), HttpStatus.OK);

    }

    @PostMapping("/additemstocart")
    public ResponseEntity<Cart> addItemsToCart(@RequestParam Integer id) {

        return new ResponseEntity<>(cartService.addItemToCart(id), HttpStatus.CREATED);

    }

    @GetMapping("/getallcartdetails")
    public ResponseEntity<Cart> getCartInfo() {

        return new ResponseEntity<Cart>(cartService.getCartInfo(), HttpStatus.ACCEPTED);

    }

    @PutMapping("/delete/quantity")
    public ResponseEntity<Cart> removeItemFromCart(@RequestParam Integer id) {

        return new ResponseEntity<>(cartService.removeItemFromCart(id), HttpStatus.OK);

    }

    @GetMapping("/total")
    public ResponseEntity<Double> totalCartAmount() {

        return new ResponseEntity<>(cartService.totalCartAmount(), HttpStatus.OK);
    }

}
