package com.mini_project.service;


import com.mini_project.model.Items;

public interface ProductManageService {


    public Items addNewItem();
    public Items addQuantityToItem();
    public Items removeQuantityToItem();

}
