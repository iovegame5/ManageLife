package com.example.healthservice.command;

import com.example.healthservice.model.BMIModel;
import lombok.Data;
import org.axonframework.modelling.command.TargetAggregateIdentifier;
@Data
public class CreateHealthCommand {
    @TargetAggregateIdentifier
    private final String userId;
    private final int age;
    private final float weight;
    private final float height;
    private final int activity;
    private final BMIModel bmi;

}
