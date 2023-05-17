package com.radnoti.swipejobs.ui.controller;

import com.radnoti.swipejobs.io.entity.JobSeekerCvEntity;
import com.radnoti.swipejobs.io.entity.UserEntity;
import com.radnoti.swipejobs.io.repositories.UserRepository;
import com.radnoti.swipejobs.service.UserService;
import com.radnoti.swipejobs.shared.dto.UserDto;
import com.radnoti.swipejobs.ui.model.request.UserDetailsRequestModel;
import com.radnoti.swipejobs.ui.model.response.UserRest;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
 //http://localhost:8080/users
@CrossOrigin("*")
public class UserController {
@Autowired
    UserService userService;
@Autowired
    UserRepository userRepository;
    @CrossOrigin("*")
    @PostMapping(path = "/users",produces = MediaType.APPLICATION_JSON_VALUE)
    public UserRest createUser(@RequestBody UserDetailsRequestModel userDetails){

       UserRest returnValue=new UserRest();
       UserDto userDto=new UserDto();

       //BeanUtils.copyProperties = ki copyzza a userDetailsből a cuccokat és inserteli a userDto-ba
    BeanUtils.copyProperties(userDetails, userDto);
        UserDto createdUser=userService.createUser(userDto);

        BeanUtils.copyProperties(createdUser,returnValue);

        return returnValue;
    }
    @GetMapping("/users/{id}")
    UserEntity one (@PathVariable Long id){
        System.out.println(id+" USER ID");
        return userRepository.findUserById(id);
    }
}
