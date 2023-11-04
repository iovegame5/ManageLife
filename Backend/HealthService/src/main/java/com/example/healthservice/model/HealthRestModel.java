package com.example.healthservice.model;

import lombok.Data;

@Data
public class HealthRestModel {
    private String userId;
    private int age;
    private float weight;
    private float height;
    private int activity;
    private BMIModel bmi;
}
