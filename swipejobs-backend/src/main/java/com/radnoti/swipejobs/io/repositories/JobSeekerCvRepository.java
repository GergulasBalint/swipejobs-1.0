package com.radnoti.swipejobs.io.repositories;

import com.radnoti.swipejobs.io.entity.JobSeekerCvEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobSeekerCvRepository extends CrudRepository<JobSeekerCvEntity, Long> {
    JobSeekerCvEntity findByJobSeekerId(Long Id);

}
