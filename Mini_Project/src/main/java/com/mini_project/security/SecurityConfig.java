package com.mini_project.security;

import com.mini_project.model.Role;
import com.mini_project.model.UserModel;
import com.mini_project.repository.UserEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.annotation.web.configurers.SessionManagementConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import com.mini_project.repository.RoleRepository;
import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.springframework.security.config.http.SessionCreationPolicy.*;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    private final JwtAuthenthicationFilter jwtAuthenthicationFilter;
    private final JwtAuthenticationEntryPoint entryPoint;
    private final RoleRepository roleRepository;
    private final UserEntityRepository userEntityRepository;


    @Autowired
    public SecurityConfig(JwtAuthenticationEntryPoint entryPoint,
            JwtAuthenthicationFilter jwtAuthenthicationFilter,
                          RoleRepository roleRepository,
                          UserEntityRepository userEntityRepository)
    {
        this.entryPoint = entryPoint;
        this.jwtAuthenthicationFilter = jwtAuthenthicationFilter;
        this.roleRepository = roleRepository;
        this.userEntityRepository = userEntityRepository;
        this.checkRolesInDataBase();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .csrf()
                .disable().exceptionHandling()
                .authenticationEntryPoint(entryPoint)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/**")
                .permitAll()
                .and()
                .httpBasic();

        http.addFilterBefore(jwtAuthenthicationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationManager manager(AuthenticationConfiguration configuration)
            throws Exception {

        return configuration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder encoder() {

        PasswordEncoder encoder = new BCryptPasswordEncoder();

        if( !userEntityRepository.existsByEmail( "admin123@mini.com" )){

            UserModel defaultAdmin = new UserModel();

            defaultAdmin.setName("admin");
            defaultAdmin.setEmail("admin123@mini.com");
            defaultAdmin.setAddress(null);
            defaultAdmin.setMobileNumber( "9831224212" );
            defaultAdmin.setPassword( encoder.encode("Admin123$"));
            defaultAdmin.setRoles( new ArrayList<>() );
//            Role role = roleRepository.findByRole("ROLE_ADMIN").
//                            orElseThrow(()->new RuntimeException("Role doesn't exist"));
//            defaultAdmin.getRoles().add(role);

            userEntityRepository.save(defaultAdmin);
        }

        return encoder;
    }

    public void checkRolesInDataBase(){

        List<String> roles = Arrays.asList( "ROLE_ADMIN" , "ROLE_USER" );

        for( String i:roles ){
            if( !roleRepository.existsByRole( i ) ){
                Role role = new Role(  );
                role.setRole(i);
                roleRepository.save( role );
            }
        }

    }

}
