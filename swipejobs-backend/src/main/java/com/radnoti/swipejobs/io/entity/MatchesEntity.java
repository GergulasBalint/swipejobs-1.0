package com.radnoti.swipejobs.io.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity(name = "matches")
public class MatchesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "job_id")
    private Integer jobId;
    @Column(name = "job_seekers_id")
    private Integer jobSeekerId;

    @Column(name = "client_id")
    private Integer clientId;

    @Column(name = "JobSeekerApplied")
    private Boolean jobSeekerApplied;

    @Column(name = "ClientApplied")
    private Boolean clientApplied;

    @Column(name = "IsMatched")
    private Boolean isMatched;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public Integer getJobId() {
        return jobId;
    }

    public void setJobId(Integer jobId) {
        this.jobId = jobId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getJobSeekerId() {
        return jobSeekerId;
    }

    public void setJobSeekerId(Integer jobSeekerId) {
        this.jobSeekerId = jobSeekerId;
    }

    public Integer getClientId() {
        return clientId;
    }

    public void setClientId(Integer clientId) {
        this.clientId = clientId;
    }

    public Boolean getJobSeekerApplied() {
        return jobSeekerApplied != null ? jobSeekerApplied : false;
    }

    public void setJobSeekerApplied(Boolean jobSeekerApplied) {
        this.jobSeekerApplied = jobSeekerApplied;
    }

    public Boolean getClientApplied() {
        return clientApplied;
    }

    public void setClientApplied(Boolean clientApplied) {
        this.clientApplied = clientApplied;
    }

    public Boolean getMatched() {
        return isMatched;
    }

    public void setMatched(Boolean matched) {
        isMatched = matched;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
