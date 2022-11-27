package com.mini_project.service;

import com.mini_project.dto.AuthenticatedResponseDto;
import com.mini_project.dto.ChangeUserPasswordDto;
import com.mini_project.dto.RegisterDto;
import com.mini_project.dto.UserLoginDto;
import com.mini_project.model.*;

public interface ManageUserService {

    public String registerCustomer(RegisterDto registerDto ) ;
    public AuthenticatedResponseDto loginUser(UserLoginDto loginDto);

    public String addAddress(Address address );
    public String changePassword( ChangeUserPasswordDto password  );

    public UserModel getUser();

}
