package tn.esprit.reunionservice;

import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication

@EnableEurekaClient
public class ReunionServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReunionServiceApplication.class, args);
    }  @Bean
    public KeycloakSpringBootConfigResolver keycloakConfigResolver() {
        return new KeycloakSpringBootConfigResolver();
    }
}

