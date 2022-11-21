package com.mini_project.service;


import com.mini_project.exception.UserDoesNotExtistException;
import com.mini_project.model.Role;
import com.mini_project.model.UserModel;
import com.mini_project.repository.UserEntityRepository;
import com.mini_project.security.TokenGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class ApplicationUserDetailService implements UserDetailsService {

    @Autowired
    private  UserEntityRepository repository ;

    @Autowired
    private TokenGenerator generator;

    @Override
    public UserDetails loadUserByUsername(String username) { /*   */

        UserModel userModel = repository
                                .findByEmail( username )
                                .orElseThrow( () ->
                                        new UserDoesNotExtistException("User does not exsist exception") );



        return new User( userModel.getEmail() ,
                         userModel.getPassword(),
                         mapRoleToUser( userModel.getRoles() )
                        );
    }

    private Collection<GrantedAuthority> mapRoleToUser(List<Role> roleList){

        return roleList
                .stream()
                .map( role -> new SimpleGrantedAuthority( role.getRole() ) )
                .collect(Collectors.toSet());

    }



}