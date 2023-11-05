package com.example.appointmentservice.query;

import com.example.appointmentservice.core.data.AppointmentEntity;
import com.example.appointmentservice.core.data.AppointmentRepository;
import com.example.appointmentservice.core.events.AppointmentCreateEvent;
import org.axonframework.eventhandling.EventHandler;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class AppointmentEventHandler{
    private final AppointmentRepository appointmentRepository;
    public AppointmentEventHandler(AppointmentRepository appointmentRepository){
        this.appointmentRepository = appointmentRepository;

    }
    @EventHandler
    public void on(AppointmentCreateEvent event){
        AppointmentEntity appointmentEntity = new AppointmentEntity();
        BeanUtils.copyProperties(event, appointmentEntity);
        appointmentRepository.save(appointmentEntity);
    }
}
