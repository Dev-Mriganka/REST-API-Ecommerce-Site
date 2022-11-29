package com.mini_project.service;

import com.mini_project.exception.LoginException;
import com.mini_project.model.UserModel;
import com.mini_project.repository.ItemsRepository;
import com.mini_project.repository.RoleRepository;
import com.mini_project.repository.UserEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserEntityRepository entityRepository;
    private RoleRepository roleEntityRepository;
    private ItemsRepository itemsRepository;

    @Autowired
    public void setEntityRepository(UserEntityRepository entityRepository) {
        this.entityRepository = entityRepository;
    }

    @Autowired
    public void setItemsRepository(ItemsRepository itemsRepository) {
        this.itemsRepository = itemsRepository;
    }

    @Override
    public UserModel updateUserDetails(UserModel userModel) throws LoginException {

        UserDetails userDetails = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        String userEmail = userDetails.getUsername();

        UserModel user = entityRepository.findByEmail(userEmail).
                orElseThrow(()->new LoginException("User with email '" + userEmail + "' does not exist"));

        user.setName(userModel.getName());

        return  entityRepository.save(user);

    }

    // public static void checkRoleInDatabase(){
    //      roleEntityRepository.f

    // }

}
