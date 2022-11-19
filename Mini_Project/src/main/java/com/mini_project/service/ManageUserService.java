package com.mini_project.service;

import com.mini_project.model.Address;
import com.mini_project.model.AuthenticatedResponseDto;
import com.mini_project.model.RegisterDto;
import com.mini_project.model.UserLoginDto;

public interface ManageUserService {

    public String registerCustomer(RegisterDto registerDto ) ;
    public AuthenticatedResponseDto loginUser(UserLoginDto loginDto);

    public String addAddress(Address address , String token);
    public String changePassword( String password , String token );


}
