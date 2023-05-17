package com.radnoti.swipejobs.service.impl;

import com.radnoti.swipejobs.io.entity.JobSeekerCvEntity;
import com.radnoti.swipejobs.io.entity.JobsEntity;
import com.radnoti.swipejobs.io.repositories.JobsRepository;
import com.radnoti.swipejobs.shared.dto.JobsDto;
import com.radnoti.swipejobs.ui.model.request.JobsRequestModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class JobsImpl {
    @Autowired
    private JobsRepository jobsRepository;

    public JobsDto createJobs(Long clientId, JobsRequestModel jobsRequestModel) {
        JobsEntity jobsEntity = new JobsEntity();
        jobsEntity.setClient_id(clientId);
        jobsEntity.setTitle(jobsRequestModel.getTitle());
        jobsEntity.setDescription(jobsRequestModel.getDescription());
        jobsEntity.setWork_type(jobsRequestModel.getWork_type());
        System.out.println("JOBSREQUESTMODEL GETCOST "+jobsRequestModel.getCostHUF() );
        jobsEntity.setCostHUF(jobsRequestModel.getCostHUF());
        jobsEntity.setLocation(jobsRequestModel.getLocation());
        jobsEntity.setFoglalkoztatas_jellege(jobsRequestModel.getFoglalkoztatas_jellege());
        jobsEntity.setCreatedAt(LocalDateTime.now());

        jobsEntity = jobsRepository.save(jobsEntity);

        JobsDto jobsDto = new JobsDto();
        jobsDto.setId(jobsEntity.getId());
        jobsDto.setTitle(jobsEntity.getTitle());
        jobsDto.setDescription(jobsEntity.getDescription());
        jobsDto.setWork_type(jobsEntity.getWork_type());
        jobsDto.setCostHUF(jobsEntity.getCostHUF());
        jobsDto.setLocation(jobsEntity.getLocation());
        jobsDto.setFoglalkoztatas_jellege(jobsEntity.getFoglalkoztatas_jellege());
        jobsEntity.setCreatedAt(LocalDateTime.now());

        return jobsDto;
    }
    public List<JobsEntity> getAllJobs() {
        return (List<JobsEntity>) jobsRepository.findAll();
    }
}

