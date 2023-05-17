package com.radnoti.swipejobs.io.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity(name="jobs")
public class JobsEntity {

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;

 @Column(name = "client_id")
 private Long clientId;
 @Column(name = "title")
 private String title;
 @Column(name = "work_type")
 private String work_type;
 @Column(name = "costHUF")
 private Integer costHUF;
 @Column(name = "location")
 private String location;
 @Column(name = "foglalkoztatas_jellege")
 private String foglalkoztatas_jellege;
 @Column(name = "description")
 private String description;
 @Column(name = "created_at")
 private LocalDateTime createdAt;

 public Long getId() {
  return id;
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

 public void setId(Long id) {
  this.id = id;
 }

 public Long getClient_id() {
  return clientId;
 }

 public void setClient_id(Long clientId) {
  this.clientId = clientId;
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

 public LocalDateTime getCreatedAt() {
  return createdAt;
 }

 public void setCreatedAt(LocalDateTime createdAt) {
  this.createdAt = createdAt;
 }
}
