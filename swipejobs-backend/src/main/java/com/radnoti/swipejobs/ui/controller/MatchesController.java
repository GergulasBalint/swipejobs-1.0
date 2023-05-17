package com.radnoti.swipejobs.ui.controller;

import com.radnoti.swipejobs.service.impl.MatchesImpl;
import com.radnoti.swipejobs.ui.model.request.MatchedRequestModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/matches")
public class MatchesController {
    @Autowired
    private MatchesImpl matchesImpl;

    @PostMapping("/apply")
    public ResponseEntity<String> applyForJob(@RequestBody MatchedRequestModel matchedRequestModel) {
        boolean isMatched = matchesImpl.applyForJob(matchedRequestModel);
        if (isMatched) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.noContent().build();
        }
    }

}

