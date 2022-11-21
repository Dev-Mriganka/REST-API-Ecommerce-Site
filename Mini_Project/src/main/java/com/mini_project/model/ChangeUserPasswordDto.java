package com.mini_project.model;

import lombok.Getter;

@Getter
public class ChangeUserPasswordDto {

    public final String newPassword;
    public final String confirmPassword;
    public final String currentPassword;


    public ChangeUserPasswordDto(String newPassword,
                                 String confirmPassword,
                                 String currentPassword)
    {
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
        this.currentPassword = currentPassword;
    }
}
