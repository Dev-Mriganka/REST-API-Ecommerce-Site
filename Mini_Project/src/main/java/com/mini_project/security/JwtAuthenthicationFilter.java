package com.mini_project.security;

import com.mini_project.service.ApplicationUserDetailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.lang.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

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

        String token = getJwtTokenFromRequest( request );

        if( StringUtils.hasText(token) && generator.validateToken( token ) ){

            String username = generator.getUserName( token );
            UserDetails userDetails =  service.loadUserByUsername( username );

            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails , null , userDetails.getAuthorities());

            authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        }

        filterChain.doFilter( request , response );

    }

//    Need to be Fixed on sending request wrong
//    token with spelling mistake should throw porper error mssg
    public String getJwtTokenFromRequest( HttpServletRequest request ){

        String bearer = request.getHeader( "Authorization" );

        try {

            if (StringUtils.hasText(bearer) && bearer.startsWith("Bearer ")) {

                String token = bearer.substring(7);

                return token;
            }
        }
        catch(Exception e){
            throw new RuntimeException( "Invalid token! Looking suspicious" );
        }


        return null;

    }



}
