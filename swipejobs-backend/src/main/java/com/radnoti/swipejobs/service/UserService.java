package com.radnoti.swipejobs.service;

import com.radnoti.swipejobs.shared.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
   UserDto createUser(UserDto user);
   UserDto getUser(String email);
}

// http.csrf().disable().authorizeRequests().requestMatchers(HttpMethod.POST, "/users")
//                .permitAll().anyRequest().authenticated();
//    }