package com.radnoti.swipejobs.ui.model.request;

import java.time.LocalDateTime;

public class JobsRequestModel {

    private String title;
    private String work_type;
    private String description;
    private Integer costHUF;
    private String location;
    private String foglalkoztatas_jellege;


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

    public Integer getCostHUF() {
        return costHUF;
    }

    public void setCostHUF(Integer costHUF) {
        this.costHUF = costHUF;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
