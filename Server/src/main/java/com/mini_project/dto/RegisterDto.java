package com.mini_project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterDto {

    @Size(min = 3, max = 30)
    private String name;

    @Email
    private String email;

    @Pattern(regexp="[a-zA-Z0-9]{8,12}",message="Password must contain between 6 to 12 characters. Must be alphanumeric with both Upper and lowercase characters.")
    private String password;

    @Size(min = 10, max = 10)
    private String mobileNo;

}
