package com.stackroute.maverick.token;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.stackroute.maverick.config.JWTFilter;

public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	public final static String AUTHORIZATION_HEADER = "Authorization";

    @Autowired
    private TokenProvider tokenProvider;

    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(this.authenticationProvider);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        JWTFilter customFilter = new JWTFilter(this.tokenProvider);
        http.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);

        // @formatter:off
        http.authorizeRequests().antMatchers("/css/**").permitAll()
       
        .antMatchers("/addUser").permitAll()
        .anyRequest().fullyAuthenticated()
        .and().formLogin().loginPage("/api/q1/auth").failureUrl("/api/q1/auth?error").permitAll()
        .and().logout().permitAll();
        // @formatter:on
        http.csrf().disable();

    }
}
