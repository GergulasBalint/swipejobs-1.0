package com.radnoti.swipejobs.ui.controller;

import com.radnoti.swipejobs.io.entity.JobSeekerCvEntity;
import com.radnoti.swipejobs.io.repositories.JobSeekerCvRepository;
import com.radnoti.swipejobs.service.impl.JobSeekerCvServiceImpl;
import com.radnoti.swipejobs.shared.dto.JobSeekerCvDto;
import com.radnoti.swipejobs.ui.model.request.JobSeekerCvRequestModel;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job-seekers")
public class JobSeekerController {

    @Autowired
    JobSeekerCvServiceImpl jobSeekerCvServiceimpl;

    @Autowired
    JobSeekerCvRepository jobSeekerCvRepository;
    @CrossOrigin("*")
    @PutMapping(path = "/jobseeker/{jobSeekerId}/cv", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> updateJobSeekerCv(@PathVariable long jobSeekerId, @RequestBody JobSeekerCvDto jobSeekerCvDto) {

        JobSeekerCvEntity updatedJobSeekerCv = jobSeekerCvServiceimpl.updateJobSeekerCv(jobSeekerId, jobSeekerCvDto);

        return ResponseEntity.ok(updatedJobSeekerCv);
    }

    @GetMapping("/jobseeker/{jobSeekerId}/cv")
    JobSeekerCvEntity one (@PathVariable long jobSeekerId){
        System.out.println(jobSeekerId+" JOB SEEKER ID");
        return jobSeekerCvRepository.findByJobSeekerId(jobSeekerId);
    }
}


//    @DeleteMapping("/{jobSeekerId}")
//    public ResponseEntity<Void> deleteJobSeekerCv(@PathVariable Long jobSeekerId) {
//        jobSeekerCvService.deleteJobSeekerCv(jobSeekerId);
//        return ResponseEntity.noContent().build();
//    }
//}
