package com.example.appointmentservice.command;

import com.example.appointmentservice.core.events.AppointmentCreateEvent;
import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;
import org.springframework.beans.BeanUtils;

@Aggregate
public class AppointmentAggregate {
    @AggregateIdentifier
    private String appointmentId;
    private String userId;
    private String appointmentDetail;
    private String appointmentTime;

    public AppointmentAggregate(){}

    @CommandHandler
    public AppointmentAggregate(CreateAppointmentCommand command){
        if(command.getAppointmentDetail().isBlank() || command.getAppointmentDetail() == null){
            throw new IllegalArgumentException("must have activity name");
        }
        if(command.getAppointmentTime().isBlank() || command.getAppointmentTime() == null){
            throw new IllegalArgumentException("must have activity time");
        }

        AppointmentCreateEvent appointmentCreateEvent = new AppointmentCreateEvent();
        BeanUtils.copyProperties(command, appointmentCreateEvent);
        AggregateLifecycle.apply(appointmentCreateEvent);


    }

    @EventSourcingHandler
    public void on(AppointmentCreateEvent appointmentCreateEvent){
        System.out.println("event สร้างแล้ว");
        this.appointmentId = appointmentCreateEvent.getAppointmentId();
        this.appointmentDetail = appointmentCreateEvent.getAppointmentDetail();
        this.appointmentTime = appointmentCreateEvent.getAppointmentTime();
        this.userId = appointmentCreateEvent.getUserId();
    }
}
