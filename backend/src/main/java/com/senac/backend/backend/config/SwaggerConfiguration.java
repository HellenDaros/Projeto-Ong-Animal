package com.senac.backend.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {

    @Bean
    public OpenAPI customOpenApi(){
        return  new OpenAPI().info(new Info().title("PetRescue")
                .version("1.0")
                .description("Api responsável pela Plataforma de Resgate e Adoção de Animais")
                .termsOfService("https://www.linkedin.com/in/hellen-dar%C3%B3s-b302a814b"));
    }
}
