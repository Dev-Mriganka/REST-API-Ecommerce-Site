package com.mini_project.cotroller;

import com.mini_project.model.Address;
import com.mini_project.model.Cart;
import com.mini_project.model.Items;
import com.mini_project.model.Orders;
import com.mini_project.service.CartService;
import com.mini_project.service.ItemsService;
import com.mini_project.service.ManageUserService;
import com.mini_project.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
    // make order
    // make payment

    @Autowired
    private ItemsService itemsService;

    @Autowired
    private OrderService orderService;

    @Autowired
    private CartService cartService;

    @Autowired
    private ManageUserService manageUserService;

    //---------Search Item Features Start------------
    // http://localhost:8888/user/items
    @GetMapping("/items")
    public ResponseEntity<List<Items>> getAllItemsHandler() {
        List<Items> ls = itemsService.getAllItems();
        return new ResponseEntity<>(ls, HttpStatus.OK);
    }
    // http://localhost:8888/item/{id}
    @GetMapping("/item/{id}")
    public ResponseEntity<Items> getItemByIdHandler(@PathVariable("id") Integer itemId){
        return new ResponseEntity<>(itemsService.getItem(itemId), HttpStatus.OK);
    }
    // http://localhost:8888/{name}
    @GetMapping("/items/{name}")
    public ResponseEntity<List<Items>> searchItemByNameHandler(@PathVariable("name") String name){
        return new ResponseEntity<>( itemsService.searchItemsByName( name ) , HttpStatus.OK );
    }
    // http://localhost:8888/category/{name}
    @GetMapping("/items/category/{name}")
    public ResponseEntity<List<Items>> getItemsByCategoryHandler(@PathVariable("name") String category) {
        return new ResponseEntity<>(itemsService.searchItemsByCategory(category), HttpStatus.OK);
    }
    // http://localhost:8888/{name}/{price}
    @GetMapping("/items/{name}/{price}")
    public ResponseEntity<List<Items>> getItemByPriceHandler(@PathVariable("name")  String name , @PathVariable("price") Integer itemprice) {
        List<Items> itemsList = itemsService.searchItemsByPrice( name ,  itemprice);
        return new ResponseEntity<>(itemsList , HttpStatus.ACCEPTED);
    }
    // http://localhost:8888/{name}/{low}/{high}
    @GetMapping("/items/range/{name}/{low}/{high}")
    public ResponseEntity<List<Items>> itemsInRangeHandler(@PathVariable("name") String name, @PathVariable("low") Integer low,
            @PathVariable("high") Integer high) {
        return new ResponseEntity<>(itemsService.searchItemsInPriceRange(name, low, high), HttpStatus.OK);
    }
    // http://localhost:8888/items/asc/{name}
    @GetMapping("/items/asc/{name}")
    public ResponseEntity<List<Items>> itemsLowToHighHandler(@PathVariable("name") String name ){
        return new ResponseEntity<>(itemsService.sortItemsByPriceLowToHigh( name ), HttpStatus.OK);
    }
    // http://localhost:8888/items/desc/{name}
    @GetMapping("/items/desc/{name}")
    public ResponseEntity<List<Items>> itemsHighToLowHandler(@PathVariable("name") String name) {
        return new ResponseEntity<>(itemsService.sortItemsByPriceHighToLow(name), HttpStatus.OK);
    }

    //----------Search Item Features End------------

    //----------Cart Features Start------------

    //   http://localhost:8888/cart/add
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PostMapping("/cart/add")
    public ResponseEntity<Cart> addItemsToCartHandler(@RequestParam Integer id) {
        return new ResponseEntity<>(cartService.addItemToCart(id), HttpStatus.CREATED);
    }
    //   http://localhost:8888/cart/items
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping("/cart/items")
    public ResponseEntity<Cart> getCartInfoHandler() {
        return new ResponseEntity<>(cartService.getCartInfo(), HttpStatus.ACCEPTED);
    }
    //   http://localhost:8888/cart/increase/{ItemId}
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PutMapping("/cart/increase/{ItemId}")
    public ResponseEntity<Cart> increseQuantityHandler(@PathVariable("ItemId") Integer ItemId){
        return new ResponseEntity<>(cartService.increaseQuantity(ItemId), HttpStatus.ACCEPTED);
    }
    //   http://localhost:8888/cart/decrease/{ItemId}
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PutMapping("/cart/decrease/{ItemId}")
    public ResponseEntity<Cart> decreseQuantityHandler(@PathVariable("ItemId") Integer ItemId){
        return new ResponseEntity<>(cartService.decreaseQuantity(ItemId), HttpStatus.ACCEPTED);
    }
    //   http://localhost:8888/cart/delete/item
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PutMapping("/cart/delete/item")
    public ResponseEntity<Cart> removeItemFromCartHandler(@RequestParam Integer id) {
        return new ResponseEntity<>(cartService.removeItemFromCart(id), HttpStatus.OK);
    }
    //   http://localhost:8888/cart/total
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping("/cart/total")
    public ResponseEntity<Double> totalCartAmountHandler() {
        return new ResponseEntity<>(cartService.totalCartAmount(), HttpStatus.OK);
    }

    //----------Cart Features End------------

    //----------Address Features Start------------
    
//   http://localhost:8888/delete/{Id}
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @DeleteMapping("/delete/{Id}")
    public ResponseEntity<String> deleteAddressHandler(@PathVariable("Id") Integer Id) {
        return new ResponseEntity<>(manageUserService.deleteAddress(Id), HttpStatus.OK);
    }
    //   http://localhost:8888/address/update
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PutMapping("/address/update")
    public ResponseEntity<Address> editAddressEntityHandler(@RequestBody Address address) {
        return new ResponseEntity<>(manageUserService.editAddress(address), HttpStatus.ACCEPTED);
    }
    //   http://localhost:8888/address/{id}
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping("/address/{id}")
    public ResponseEntity<Address> getAddressHandler(@PathVariable("id") Integer addressId) {
        return new ResponseEntity<>(manageUserService.getAddress(addressId), HttpStatus.OK);
    }
    //   http://localhost:8888
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @GetMapping("/addresses")
    public ResponseEntity<List<Address>> getAllAddressHandler(){
        return new ResponseEntity<>(manageUserService.getAllOfUser(), HttpStatus.FOUND);
    }

    //----------Address Features End------------


    //----------Order Features Start------------

    //   http://localhost:8888/order/place/{id}
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @PostMapping("/order/place/{id}")
    public ResponseEntity<Orders> placeOrderFromCart(@PathVariable("id") Integer addressId) {
        return new ResponseEntity<>(orderService.orderItemsFromCart(addressId) , HttpStatus.OK);
    }
    //   http://localhost:8888/order/cancel/{id}
    @PreAuthorize("hasAnyRole('ROLE_USER')")
    @DeleteMapping("/order/cancel/{id}")
    public ResponseEntity<Cart> cancelOrderHandler(@PathVariable("id") Integer orderId) {
        return new ResponseEntity<>(cartService.removeItemFromCart(orderId), HttpStatus.ACCEPTED);
    }

    //----------Order Features End------------
}
