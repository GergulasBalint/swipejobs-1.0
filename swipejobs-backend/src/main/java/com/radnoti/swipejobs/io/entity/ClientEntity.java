package com.radnoti.swipejobs.io.entity;

import jakarta.persistence.*;

@Entity(name="clients")
public class ClientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "company")
    private String company;
    @Column(name = "tax_number")
    private int tax_number = 0 ;
    @Column(name = "location")
    private String location;
    @Column(name = "user_type")
    private int user_type;

    @Column(name = "jobsCount")
    private int jobsCount= 0;

    @Column(name="created_at")
    private String created_at;

    public ClientEntity() {
        this.jobsCount = 0;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public int getTax_number() {
        return tax_number;
    }

    public void setTax_number(int tax_number) {
        this.tax_number = tax_number;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getUser_type() {
        return user_type;
    }

    public void setUser_type(int user_type) {
        this.user_type = user_type;
    }

    public int getJobsCount() {
        return jobsCount;
    }

    public void setJobsCount(int jobsCount) {
        this.jobsCount = jobsCount;
    }
}
