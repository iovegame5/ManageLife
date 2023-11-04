package com.example.healthservice.event;

import com.example.healthservice.model.BMIModel;
import lombok.Data;

@Data
public class CreateHealthEvent {
    private final String userId;
    private final int age;
    private final float weight;
    private final float height;
    private final int activity;
    private final BMIModel bmi;
}
