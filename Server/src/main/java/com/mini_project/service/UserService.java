package com.mini_project.service;

import com.mini_project.dto.UserModelDTO;
import com.mini_project.dto.UserResponseDTO;
import com.mini_project.model.UserModel;

public interface UserService {

    UserResponseDTO updateUserDetails(UserModel userModel) throws Exception;



}
