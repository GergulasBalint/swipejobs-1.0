package com.radnoti.swipejobs.shared.dto;

import java.time.LocalDateTime;

public class JobsDto {
    private Long id;
    private Long client_id;
    private String title;
    private String work_type;
    private Integer costHUF;
    private String location;
    private String foglalkoztatas_jellege;
    private String description;
    private LocalDateTime createdAt;
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClient_id() {
        return client_id;
    }

    public Integer getCostHUF() {
        return costHUF;
    }

    public void setCostHUF(Integer cost) {
        this.costHUF = cost;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getFoglalkoztatas_jellege() {
        return foglalkoztatas_jellege;
    }

    public void setFoglalkoztatas_jellege(String foglalkoztatas_jellege) {
        this.foglalkoztatas_jellege = foglalkoztatas_jellege;
    }

    public void setClient_id(Long client_id) {
        this.client_id = client_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getWork_type() {
        return work_type;
    }

    public void setWork_type(String work_type) {
        this.work_type = work_type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
