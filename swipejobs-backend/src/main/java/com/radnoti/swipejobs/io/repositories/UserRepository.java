package com.radnoti.swipejobs.io.repositories;


import com.radnoti.swipejobs.io.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
     UserEntity findUserByEmail(String email);
     UserEntity findUserById(Long id);


}
