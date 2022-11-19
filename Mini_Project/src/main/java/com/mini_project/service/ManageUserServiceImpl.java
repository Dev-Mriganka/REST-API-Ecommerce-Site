package com.mini_project.service;

import com.mini_project.exception.UserAlreadyExsistException;
import com.mini_project.model.*;
import com.mini_project.repository.RoleEntityRepository;
import com.mini_project.repository.UserEntityRepository;
import com.mini_project.security.TokenGenerator;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class ManageUserServiceImpl implements ManageUserService{

    @Autowired
    private UserEntityRepository userEntityRepository;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleEntityRepository roleRepository;

    @Autowired
    private TokenGenerator generator;

    @Override
    public String registerCustomer(RegisterDto model) {

        if( userEntityRepository.existsByEmail(model.getEmail()) )
            throw new UserAlreadyExsistException("User Already exists");

        UserModel userModel = new UserModel(  );

        userModel.setEmail( model.getEmail() );
        userModel.setName(  model.getName() );
        userModel.setMobileNumber( model.getMobileNo() );
        userModel.setPassword( passwordEncoder.encode( model.getPassword() ) );

        Role role = roleRepository.findRoleByRole( "ROLE_USER" ).get();

        userModel.setRoles(Collections.singletonList( role ) );

        userEntityRepository.save(userModel);

        return "You have been register successfully";

    }

    @Override
    public AuthenticatedResponseDto loginUser(@NotNull UserLoginDto loginDto) {

        Authentication authentication = manager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getEmail(),
                        loginDto.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication( authentication );

        String token = generator.generateToken( authentication );

        return new AuthenticatedResponseDto(token);

    }
}
