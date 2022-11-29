package com.mini_project.dto;

import lombok.Getter;

@Getter
public class AuthenticatedResponseDto {

    private final String token;
    private final String tokenType = "Bearer";

    public AuthenticatedResponseDto(String token) {
        this.token = token;
    }

}
