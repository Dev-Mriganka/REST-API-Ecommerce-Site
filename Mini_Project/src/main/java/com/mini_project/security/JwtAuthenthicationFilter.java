package com.mini_project.security;

import com.mini_project.service.ApplicationUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenthicationFilter extends OncePerRequestFilter {

    public final TokenGenerator generator;
    public final ApplicationUserDetailService service;

    @Autowired
    public JwtAuthenthicationFilter(TokenGenerator generator, ApplicationUserDetailService service) {
        this.generator = generator;
        this.service = service;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

    }

    public String getJwtTokenFromRequest( HttpServletRequest request ){

        String bearer = request.getHeader( "Authorization" );

        return null;
    }



}
