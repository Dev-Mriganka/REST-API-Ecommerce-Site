package com.mini_project.cotroller;

import com.mini_project.dto.*;
import com.mini_project.model.*;
import com.mini_project.service.ManageUserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/mini")
public class ManageUserController {

    @Autowired
    private ManageUserService manageService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private ModelMapper modelMapper;

    private static String admin = "ROLE_ADMIN";
    private static String user = "ROLE_USER";

    // http://localhost:8888/register
    @PostMapping("/register") /* USER REGISTRATION */
    public ResponseEntity<String> registerUser(@Valid @RequestBody RegisterDto model) {

        String msg = manageService.registerCustomer(model ,user );

        return new ResponseEntity<>(msg, HttpStatus.CREATED);

    }
    // http://localhost:8888/login
    @PostMapping("/login") /* USER LOGIN */
    public ResponseEntity<AuthenticatedResponseDto> loginUser(@Valid @RequestBody UserLoginDto logindto) {

        AuthenticatedResponseDto responseDto = manageService.loginUser(logindto);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }
    // http://localhost:8888/address
    @PutMapping("/address") /* USER ADDRESS CHANGE */
    public ResponseEntity<UserResponseDTO> addAddress(@Valid @RequestBody Address address) {
        System.out.println(address.toString());
        manageService.addAddress(address);
        UserModel user = manageService.getUser();

        return new ResponseEntity<>(modelMapper.map(user, UserResponseDTO.class), HttpStatus.CREATED);
    }
    // http://localhost:8888/change-password
    @PutMapping("/change-password") /* USER PASSWORD CHANGE */
    public ResponseEntity<String> changePassoword(@Valid @RequestBody ChangeUserPasswordDto changePasswordDto) {

        String s = manageService.changePassword(changePasswordDto);

        return new ResponseEntity<>(s, HttpStatus.OK);
    }

    // http://localhost:8888/register/admin
    @PreAuthorize("hasAnyRole('ROLE_ADMIN')")
    @PostMapping("/register/admin")
    public ResponseEntity<String> registerAdminForSingleUseOnly(@Valid @RequestBody RegisterDto registerDto) {

        return new ResponseEntity<>(manageService.registerCustomer(registerDto , admin) , HttpStatus.CREATED);
    }


}
