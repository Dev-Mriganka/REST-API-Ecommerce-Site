package com.mini_project.service;

import com.mini_project.exception.UserAlreadyExsistException;
import com.mini_project.exception.UserDoesNotExtistException;
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
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;

@Service
public class ManageUserServiceImpl implements ManageUserService{

    @Autowired
    private UserEntityRepository userEntityRepository;

    @Autowired
    ApplicationUserDetailService applicationUserDetailService;
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

    @Override
    public String addAddress(Address address) {

        UserModel model = getUser();

        if( ! model.getAddress().add( address ) )
            throw new RuntimeException( "Address already added" );

        userEntityRepository.save( model );


        return "Address added successfully";

    }


    @Override
    public String changePassword( ChangeUserPasswordDto password ) {

        UserModel model = getUser();

        if(!passwordEncoder.matches( password.getCurrentPassword() , model.getPassword() ))
            throw new RuntimeException( "Please enter correct password" );

        if( !password.getNewPassword().equals( password.getConfirmPassword() ) )
            throw new RuntimeException( "Password doesn't match" );


        model.setPassword( passwordEncoder.encode( password.getNewPassword() ) ) ;

        userEntityRepository.save(model);

        return "Password has been updated";
    }

    @Override
    public UserModel getUser(  ){

        try {
            Object o = SecurityContextHolder
                    .getContext()
                    .getAuthentication()
                    .getPrincipal();

            UserDetails userDetails = (UserDetails) o;

            String username = userDetails.getUsername();

            return userEntityRepository.findByEmail(username)
                    .orElseThrow( () ->
                            new UserDoesNotExtistException("User doesn't exist") );
        }
        catch (Exception e){
            throw new RuntimeException( "Please check the token again" );
        }


    }

}
