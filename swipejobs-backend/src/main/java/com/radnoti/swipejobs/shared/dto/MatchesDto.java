package com.radnoti.swipejobs.shared.dto;

import jakarta.persistence.Column;

public class MatchesDto {
    private Long id;

private int jobId;
    private int job_seeker_id;


    private int client_id;


    private Boolean jobseekerapplied;

    private Boolean clientapplied;

    private Boolean ismatched;

    private String created_at;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getJobId() {
        return jobId;
    }

    public void setJobId(int jobId) {
        this.jobId = jobId;
    }

    public int getJob_seeker_id() {
        return job_seeker_id;
    }

    public void setJob_seeker_id(int job_seeker_id) {
        this.job_seeker_id = job_seeker_id;
    }

    public int getClient_id() {
        return client_id;
    }

    public void setClient_id(int client_id) {
        this.client_id = client_id;
    }

    public Boolean getJobseekerapplied() {
        return jobseekerapplied;
    }

    public void setJobseekerapplied(Boolean jobseekerapplied) {
        this.jobseekerapplied = jobseekerapplied;
    }

    public Boolean getClientapplied() {
        return clientapplied;
    }

    public void setClientapplied(Boolean clientapplied) {
        this.clientapplied = clientapplied;
    }

    public Boolean getIsmatched() {
        return ismatched;
    }

    public void setIsmatched(Boolean ismatched) {
        this.ismatched = ismatched;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }
}
