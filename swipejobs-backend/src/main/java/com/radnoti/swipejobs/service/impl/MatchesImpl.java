package com.radnoti.swipejobs.service.impl;

import com.radnoti.swipejobs.io.entity.MatchesEntity;
import com.radnoti.swipejobs.io.repositories.MatchesRepository;
import com.radnoti.swipejobs.io.repositories.UserRepository;
import com.radnoti.swipejobs.shared.dto.MatchesDto;
import com.radnoti.swipejobs.ui.model.request.MatchedRequestModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MatchesImpl {
    private final MatchesRepository matchesRepository;

    @Autowired
    public MatchesImpl(MatchesRepository matchesRepository, UserRepository userRepository) {
        this.matchesRepository = matchesRepository;
    }

    @Transactional
    public boolean applyForJob(MatchedRequestModel request) {
        int jobSeekerId = request.getJobSeekerId();
        int clientId = request.getClientId();
        boolean apply = request.isApply();
        int user_type =request.getUser_type();

        MatchesEntity matches = matchesRepository.findByJobSeekerIdAndClientId(jobSeekerId, clientId);

        if (matches == null) {
            matches = new MatchesEntity();
            matches.setJobSeekerId(jobSeekerId);
            matches.setClientId(clientId);
            matches.setJobId(request.getJobId());
        }

        if (user_type == 1) { // client
            matches.setClientApplied(apply);
            matches.setMatched(matches.getJobSeekerApplied() != null && matches.getJobSeekerApplied() && apply);
        } else { // job seeker
            matches.setJobSeekerApplied(apply);
            matches.setMatched(matches.getClientApplied() != null && matches.getClientApplied() && apply);
        }

        Boolean clientApplied = matches.getClientApplied();
        boolean isClientApplied = clientApplied != null && clientApplied.booleanValue();
        boolean isMatched = matches.getJobSeekerApplied() && isClientApplied;

        matchesRepository.save(matches);

        return isMatched;


}

    public MatchesDto getMatchesById(Long matchesId) {
        MatchesEntity matches = matchesRepository.findById(matchesId).orElse(null);

        if (matches == null) {
            return null;
        }

        MatchesDto matchesDto = new MatchesDto();
        matchesDto.setId(matches.getId());
        matchesDto.setJobId(matches.getJobId());
        matchesDto.setJob_seeker_id(matches.getJobSeekerId());
        matchesDto.setClient_id(matches.getClientId());
        matchesDto.setJobseekerapplied(matches.getJobSeekerApplied());
        matchesDto.setClientapplied(matches.getClientApplied());
        matchesDto.setIsmatched(matches.getMatched());

        return matchesDto;
    }
}
