package com.example.healthservice;

import com.example.healthservice.config.AxonXstreamConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Import;

@EnableDiscoveryClient
@SpringBootApplication
@Import({ AxonXstreamConfig.class })
public class HealthServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(HealthServiceApplication.class, args);
    }

}
