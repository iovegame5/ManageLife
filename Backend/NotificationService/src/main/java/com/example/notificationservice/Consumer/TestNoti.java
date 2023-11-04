package com.example.notificationservice.Consumer;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class TestNoti {

    @RabbitListener(queues = "TestQueue")
    public String test(String s){
        return s;
    }

}
