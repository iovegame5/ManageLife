package com.example.appointmentservice.query.rest;

import com.example.appointmentservice.query.FindAppointmentQuery;
import org.axonframework.messaging.responsetypes.ResponseTypes;
import org.axonframework.queryhandling.QueryGateway;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/appointment")
public class AppointmentQueryController {
    private final QueryGateway queryGateway;
    public AppointmentQueryController(QueryGateway queryGateway){
        this.queryGateway = queryGateway;
    }

    @GetMapping
    public List<AppointmentRestModel> getAppointments(){
        FindAppointmentQuery findAppointmentQuery = new FindAppointmentQuery();
        return queryGateway.query(
                findAppointmentQuery,
                ResponseTypes.multipleInstancesOf(AppointmentRestModel.class)
        ).join();
    }
}
