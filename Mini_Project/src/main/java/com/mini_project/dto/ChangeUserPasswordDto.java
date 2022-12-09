package com.mini_project.dto;

import lombok.Getter;
import lombok.NonNull;
import javax.validation.constraints.Pattern;


@Getter
public class ChangeUserPasswordDto {

//    @NonNull
//    @Pattern(regexp="[a-zA-Z0-9]{6,12}",message="Password must contain between 6 to 12 characters. Must be alphanumeric with both Upper and lowercase characters.")
    public final String newPassword;
//    @NonNull
//    @Pattern(regexp="[a-zA-Z0-9]{6,12}",message="Password must contain between 6 to 12 characters. Must be alphanumeric with both Upper and lowercase characters.")
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
