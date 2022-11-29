package com.mini_project.service;

import com.mini_project.dto.*;
import com.mini_project.exception.AddressException;
import com.mini_project.exception.UserAlreadyExsistException;
import com.mini_project.exception.UserDoesNotExtistException;
import com.mini_project.model.*;
import com.mini_project.repository.AddressRepo;
import com.mini_project.repository.RoleEntityRepository;
import com.mini_project.repository.UserEntityRepository;
import com.mini_project.security.TokenGenerator;
import org.jetbrains.annotations.NotNull;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ManageUserServiceImpl implements ManageUserService {

    @Autowired
    private UserEntityRepository userEntityRepository;

    @Autowired
    private ApplicationUserDetailService applicationUserDetailService;

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RoleEntityRepository roleRepository;

    @Autowired
    private TokenGenerator generator;

    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public String registerCustomer(RegisterDto model, String userType) {

        if (userEntityRepository.existsByEmail(model.getEmail()))
            throw new UserAlreadyExsistException("User Already exists");

        UserModel userModel = new UserModel();

        userModel.setEmail(model.getEmail());
        userModel.setName(model.getName());
        userModel.setMobileNumber(model.getMobileNo());
        userModel.setPassword(passwordEncoder.encode(model.getPassword()));
        userModel.setCart(new Cart());

        Role role = roleRepository.findRoleByRole(userType).get();

        userModel.setRoles(Collections.singletonList(role));

        userEntityRepository.save(userModel);

        return "You have been register successfully";

    }

    @Override
    public AuthenticatedResponseDto loginUser(@NotNull UserLoginDto loginDto) {

        Authentication authentication = manager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDto.getEmail(),
                        loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = generator.generateToken(authentication);

        return new AuthenticatedResponseDto(token);

    }

    @Override
    public String addAddress(Address address) {

        UserModel model = getUser();

        model.getAddress().add(address);

        userEntityRepository.save(model);

        return "Address added successfully";

    }

    @Override
    public String changePassword(ChangeUserPasswordDto password) {

        UserModel model = getUser();

        if (!passwordEncoder.matches(password.getCurrentPassword(), model.getPassword()))
            throw new RuntimeException("Please enter correct password");

        if (!password.getNewPassword().equals(password.getConfirmPassword()))
            throw new RuntimeException("Password doesn't match");

        model.setPassword(passwordEncoder.encode(password.getNewPassword()));

        userEntityRepository.save(model);

        return "Password has been updated";
    }

    @Override
    public UserModel getUser() {

        try {
            Object o = SecurityContextHolder
                    .getContext()
                    .getAuthentication()
                    .getPrincipal();

            UserDetails userDetails = (UserDetails) o;

            String username = userDetails.getUsername();

            return userEntityRepository.findByEmail(username)
                    .orElseThrow(() -> new UserDoesNotExtistException("User doesn't exist"));
        } catch (Exception e) {
            throw new RuntimeException("Please check the token again");
        }

    }

    @Override
    public Address editAddress(Address address) {

        UserModel model = getUser();

        Set<Address> setOfAddress = model.getAddress();

        if (setOfAddress.isEmpty()) {
            throw new AddressException("Please Add Address first");
        } else {
            for (Address a : setOfAddress) {
                if (a.getId() == address.getId()) {
                    a.setCity(address.getCity());
                    a.setCountry(address.getCountry());
                    a.setZipCode(address.getZipCode());
                    a.setStreet(address.getStreet());
                    a.setState(address.getState());
                    userEntityRepository.save(model);
                    return address;
                }
            }
        }
        throw new AddressException("User with " + address.getId() + " is not found");

    }

    @Override
    public String deleteAddress(Integer addressId) {

        UserModel model = getUser();

        Optional<Address> opt = addressRepo.findById(addressId);

        if (opt.isPresent()) {

            Address address = opt.get();

            Set<Address> addressList = model.getAddress();
            boolean flag = false;
            for (Address a : addressList) {
                if (a.getId() == address.getId()) {
                    addressList.remove(a);
                    flag = true;
                    break;
                }
            }

            if (flag) {
                addressRepo.delete(address);
                return "Address Deleted";
            } else
                throw new AddressException("Invalid address Id");

        }

        throw new AddressException(" No Address found ");
    }

    @Override
    public Address getAddress(Integer addressId) {

        Optional<Address> address = addressRepo.findById(addressId);
        if (address.isPresent())
            return address.get();
        else
            throw new AddressException("Address is not found ");

    }

    @Override
    public List<Address> getAllOfUser() {

        List<Address> addressList = addressRepo.findAll();

        if (addressList.isEmpty()) {
            throw new AddressException("No Address found ");

        }

        return addressList;

    }

}
