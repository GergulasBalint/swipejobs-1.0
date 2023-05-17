package com.radnoti.swipejobs.io.repositories;

import com.radnoti.swipejobs.io.entity.ClientEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends CrudRepository<ClientEntity, Long> {
    Optional<ClientEntity> findById(Long id);
}
