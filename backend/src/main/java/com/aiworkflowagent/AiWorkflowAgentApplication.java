# Java 21 Spring Boot 3.2 Main Application Class
# =====================================================================
package com.aiworkflowagent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableAsync
@EnableScheduling
public class AiWorkflowAgentApplication {
    public static void main(String[] args) {
        SpringApplication.run(AiWorkflowAgentApplication.class, args);
    }
}
