package com.radnoti.swipejobs.io.repositories;

import com.radnoti.swipejobs.io.entity.JobsEntity;
import com.radnoti.swipejobs.io.entity.MatchesEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MatchesRepository extends CrudRepository<MatchesEntity, Long>{
    MatchesEntity findByJobSeekerIdAndClientId(int jobSeekerId, int clientId);

}
