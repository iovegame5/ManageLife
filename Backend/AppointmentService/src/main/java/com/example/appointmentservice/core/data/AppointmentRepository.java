package com.example.appointmentservice.core.data;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepository extends MongoRepository<AppointmentEntity, String> {
    AppointmentEntity findByAppointmentId(String appointmentId);
}
