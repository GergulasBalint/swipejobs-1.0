package com.radnoti.swipejobs.io.repositories;

import com.radnoti.swipejobs.io.entity.JobSeekerCvEntity;
import com.radnoti.swipejobs.io.entity.JobsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface JobsRepository extends CrudRepository<JobsEntity, Long> {
    JobsEntity findByClientId(Long clientId);
}

