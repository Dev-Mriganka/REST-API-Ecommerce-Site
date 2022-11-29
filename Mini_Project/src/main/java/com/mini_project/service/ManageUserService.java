package com.mini_project.service;

import java.util.List;

import com.mini_project.dto.AuthenticatedResponseDto;
import com.mini_project.dto.ChangeUserPasswordDto;
import com.mini_project.dto.RegisterDto;
import com.mini_project.dto.UserLoginDto;
import com.mini_project.model.*;

public interface ManageUserService {

    String registerCustomer(RegisterDto registerDto, String userType);
    
    AuthenticatedResponseDto loginUser(UserLoginDto loginDto);

    String addAddress(Address address);
    
    String changePassword(ChangeUserPasswordDto password);

    UserModel getUser();

    Address editAddress(Address address);
    
    String deleteAddress(Integer addressId);

    Address getAddress(Integer addressId);
    
    List<Address> getAllOfUser();
    
}
