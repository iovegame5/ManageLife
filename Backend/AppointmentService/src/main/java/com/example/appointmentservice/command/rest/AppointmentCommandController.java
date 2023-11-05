package com.example.appointmentservice.command.rest;

import com.example.appointmentservice.command.CreateAppointmentCommand;

import lombok.Data;
import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;


@RestController
@RequestMapping("/appointment")
public class AppointmentCommandController {
    private final Environment env;
    private final CommandGateway commandGateway;

    @Autowired
    public AppointmentCommandController(Environment env, CommandGateway commandGateway){
        this.env = env;
        this.commandGateway = commandGateway;
    }

    @PostMapping
    public String createAppointment(@RequestBody CreateAppointmentRestModel model){
        CreateAppointmentCommand command = CreateAppointmentCommand.builder()
                .appointmentId(UUID.randomUUID().toString())
                .userId(model.getUserId())
                .appointmentDetail(model.getAppointmentDetail())
                .appointmentTime(model.getAppointmentTime())
                .build();
//        System.out.println("i'm working yu na");

        String result;
        try{
            result = commandGateway.sendAndWait(command);
        }
        catch (Exception e){
            result = e.getLocalizedMessage();
        }
//        System.out.println("command: " + command+ " result: "+ result);
        return  result;

    }

}
