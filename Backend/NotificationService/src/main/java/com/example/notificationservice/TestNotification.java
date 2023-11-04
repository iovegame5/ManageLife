package com.example.notificationservice;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestNotification {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @PostMapping(value = "/test")
    public String show(){
        return (String)rabbitTemplate.convertSendAndReceive("Test", "hello", "test");
    }
}
