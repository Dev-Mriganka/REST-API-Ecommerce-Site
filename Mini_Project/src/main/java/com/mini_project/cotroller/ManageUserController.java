package com.mini_project.cotroller;

import com.mini_project.model.*;
import com.mini_project.repository.UserEntityRepository;
import com.mini_project.security.TokenGenerator;
import com.mini_project.service.ManageUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/mini")
public class ManageUserController {

    @Autowired
    private ManageUserService manageService;



    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody RegisterDto model ){

        String msg = manageService.registerCustomer( model );

        return new ResponseEntity<>(  msg , HttpStatus.CREATED  );

    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticatedResponseDto> loginUser(@RequestBody UserLoginDto logindto ){

        AuthenticatedResponseDto responseDto = manageService.loginUser(logindto);

        return new ResponseEntity<>( responseDto , HttpStatus.OK );
    }

    @PutMapping("/address")
    public ResponseEntity<UserModel> addAddress(@RequestBody Address address){
        System.out.println( address.toString() );
        manageService.addAddress( address );

        return new ResponseEntity<>( manageService.getUser() , HttpStatus.CREATED );

    }

    @PutMapping
    public ResponseEntity<String> changePassoword( @RequestBody ChangeUserPasswordDto changePasswordDto ){

        String s = manageService.changePassword( changePasswordDto );

        return new ResponseEntity<>(  s  , HttpStatus.OK );
    }


}
