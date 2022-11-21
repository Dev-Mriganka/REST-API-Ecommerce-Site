package com.mini_project.model;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
public class RegisterDto {


    private String name;

    @NotEmpty(message = "Email field cannot be empty")
    @NotNull( message = "Email address cannot be null Please try again")
    @NotBlank(message = "Email shouldn't be blank")
    private String email;

    @NotEmpty(message = "Email feild cannot be empty")
    @NotNull( message = "Email address cannot be null Please try again")
    @NotBlank(message = "Email shouldn't be blank")
    @Size(min = 8 , message = "Password length must be above 8")
    private String password;

    private String mobileNo;

}
