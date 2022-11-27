package com.mini_project.service;

import com.mini_project.model.Items;
import com.mini_project.repository.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.Optional;

@Service
public class ProductmanageServiceImpl implements ProductManageService{

    @Autowired
    private ItemsRepository itemsRepo;

    @Override
    public Items addNewItem(@NotNull Items items) {

        return itemsRepo.save(items);

    }

}
