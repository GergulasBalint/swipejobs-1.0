package com.radnoti.swipejobs.ui.model.request;

public class ClientRequestModel {
    private Long id;

    private String company;

    private int tax_number;

    private String location;

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
}
