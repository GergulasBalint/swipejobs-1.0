package com.radnoti.swipejobs.ui.controller;


import com.radnoti.swipejobs.io.entity.JobsEntity;
import com.radnoti.swipejobs.service.impl.JobsImpl;
import com.radnoti.swipejobs.shared.dto.JobsDto;
import com.radnoti.swipejobs.ui.model.request.JobsRequestModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobsController {
    @Autowired
    private JobsImpl jobsImpl;

    @PostMapping("/{client_id}")
    public ResponseEntity<JobsDto> createJobs(@PathVariable("client_id") Long clientId, @RequestBody JobsRequestModel jobsRequestModel) {
        JobsDto addedJob = jobsImpl.createJobs(clientId, jobsRequestModel);

        return ResponseEntity.ok(addedJob);
    }

    @GetMapping("/alljobs")
    public List<JobsEntity> getAllJobs() {
        return jobsImpl.getAllJobs();
    }
    @GetMapping("/{client_id}/jobs")
    public List<JobsEntity> getAllJobs(@PathVariable("client_id") Long clientId) {
        return jobsImpl.getAllJobs();
    }

}

