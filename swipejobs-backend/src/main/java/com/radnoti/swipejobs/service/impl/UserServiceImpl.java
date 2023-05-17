package com.radnoti.swipejobs.service.impl;

import com.radnoti.swipejobs.io.repositories.UserRepository;
import com.radnoti.swipejobs.io.entity.UserEntity;
import com.radnoti.swipejobs.service.UserService;
import com.radnoti.swipejobs.shared.dto.UserDto;
import com.radnoti.swipejobs.shared.dto.Utils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {
@Autowired
    UserRepository userRepository;

@Autowired
    Utils utils;

@Autowired
    BCryptPasswordEncoder cryptPasswordEncoder;
    @Override
    public UserDto createUser(UserDto user){
    UserEntity userEntity=new UserEntity();
        if(userRepository.findUserByEmail(user.getEmail())!=null) throw new RuntimeException("Record already exists");
        System.out.println("USER TYPE ÉRTÉKE : "+user.getUser_type());

        BeanUtils.copyProperties(user, userEntity);
        System.out.println("USER TYPE ÉRTÉKE : "+user.getUser_type());

        String publicUserId=utils.generateUserId(30);
        userEntity.setEncryptedPassword(cryptPasswordEncoder.encode(user.getPassword()));
        userEntity.setUserId(publicUserId);
        UserEntity storedUserDetails=userRepository.save(userEntity);
        UserDto returnValue = new UserDto();
        BeanUtils.copyProperties(storedUserDetails,returnValue);
        System.out.println("USERSERVICEIMPL USERID: "+returnValue.getUserId());
        return returnValue;
    }

    @Override
    public UserDto getUser(String email){
        UserEntity userEntity=userRepository.findUserByEmail(email);
        if(userEntity==null) throw new UsernameNotFoundException(email);
        UserDto returnValue=new UserDto();
        BeanUtils.copyProperties(userEntity,returnValue);
        return returnValue;
    }
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
            UserEntity userEntity= userRepository.findUserByEmail(email);
            if(userEntity==null) throw new UsernameNotFoundException(email);
    return new User(userEntity.getEmail(),userEntity.getEncryptedPassword(), new ArrayList<>());
    }
}
