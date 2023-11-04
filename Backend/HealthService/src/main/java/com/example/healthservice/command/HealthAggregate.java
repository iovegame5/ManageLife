package com.example.healthservice.command;

import com.example.healthservice.event.CreateHealthEvent;
import com.example.healthservice.model.BMIModel;
import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;
import org.springframework.beans.BeanUtils;

@Aggregate
public class HealthAggregate {
    @AggregateIdentifier
    private String userId;
    private int age;
    private float weight;
    private float height;
    private int activity;
    private BMIModel bmi;

    public HealthAggregate() {
    }

    @CommandHandler
    public void handler(CreateHealthCommand command) {
        if (command.getBmi() == null || command.getUserId() == null || command.getUserId().isBlank()) {
            throw new IllegalArgumentException("Something cannot be empty");
        }
        if (command.getAge() <= 0 || command.getActivity() <= 0 || command.getHeight() <= 0 || command.getWeight() <= 0) {
            throw new IllegalArgumentException("Something cannot be less than or equal to zero");
        }
        CreateHealthEvent createHealthEvent = new CreateHealthEvent();
        BeanUtils.copyProperties(command, createHealthEvent);
        AggregateLifecycle.apply(createHealthEvent);
    }

    @EventSourcingHandler
    public void on(CreateHealthEvent event) {
        this.userId = event.getUserId();
        this.age = event.getAge();
        this.weight = event.getWeight();
        this.height = event.getHeight();
        this.activity = event.getActivity();
        this.bmi = event.getBmi();
    }
}
