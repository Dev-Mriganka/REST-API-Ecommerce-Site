package com.mini_project.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.util.Date;

@Component
public class TokenGenerator {

    public String generateToken(Authentication authentication){

        return Jwts.builder()
                .setSubject( authentication.getName() )
                .setIssuedAt( new Date() )
                .setExpiration( new Date( new Date().getTime() +  SecurityConstant.Expiratation )  )
                .signWith( SignatureAlgorithm.HS512 , SecurityConstant.JWT_SECRET )
                .compact();

    }

    public String getUserName(String token){

        return Jwts.parser()
                    .setSigningKey( SecurityConstant.JWT_SECRET )
                    .parseClaimsJws( token )
                    .getBody()
                    .getSubject();


    }

    public Boolean validateToken(String token){

        try{
            Jwts.parser().setSigningKey( SecurityConstant.JWT_SECRET ).parseClaimsJws(token);
            return true;
        }
        catch ( Exception e ){

            throw new AuthenticationCredentialsNotFoundException( "Token was expired or incorrect" );

        }

    }

}
