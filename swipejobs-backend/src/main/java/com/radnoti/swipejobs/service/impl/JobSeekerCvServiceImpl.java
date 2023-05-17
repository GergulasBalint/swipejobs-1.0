package com.radnoti.swipejobs.service.impl;

import com.radnoti.swipejobs.io.entity.JobSeekerCvEntity;
import com.radnoti.swipejobs.io.repositories.JobSeekerCvRepository;
import com.radnoti.swipejobs.shared.dto.JobSeekerCvDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobSeekerCvServiceImpl {
    @Autowired
    private JobSeekerCvRepository jobSeekerCvRepository;
    public JobSeekerCvEntity updateJobSeekerCv(Long jobSeekerId, JobSeekerCvDto jobSeekerCvDto) {
        JobSeekerCvEntity jobSeekerCvEntity = jobSeekerCvRepository.findByJobSeekerId(jobSeekerId);

        if (jobSeekerCvEntity == null) {
            jobSeekerCvEntity = new JobSeekerCvEntity();
            jobSeekerCvEntity.setJobSeekerId(jobSeekerId);
        }

        jobSeekerCvEntity.setPicture(jobSeekerCvDto.getPicture());
//        System.out.println("set picture eredménye: " + jobSeekerCvEntity.getPicture());
        jobSeekerCvEntity.setBio(jobSeekerCvDto.getBio());
        jobSeekerCvEntity.setGender(jobSeekerCvDto.getGender());
        jobSeekerCvEntity.setAge(jobSeekerCvDto.getAge());
        jobSeekerCvEntity.setQualification(jobSeekerCvDto.getQualification());
        jobSeekerCvEntity.setLocation(jobSeekerCvDto.getLocation());
        jobSeekerCvEntity.setSkills(jobSeekerCvDto.getSkills());
        return jobSeekerCvRepository.save(jobSeekerCvEntity);
    }

    }
