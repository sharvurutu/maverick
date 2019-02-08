package com.stackroute.maverick.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.stackroute.maverick.controller.GameManagerController;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author sushmita
 *
 */
@EnableSwagger2
@ComponentScan(basePackageClasses = GameManagerController.class)
@Configuration
public class SwaggerConfiguration {

	public static final String SWAGGER_API_VERSION = "1.0";
	public static final String LICENSE = "license";
	public static final String title = "GAME MANAGER REST API";
	public static final String description = "Restful API for GAME MANAGER";
      private ApiInfo apiInfo() {

		return new ApiInfoBuilder()
                                       .title(title)
                                       .description(description)
                                      .license(LICENSE)
                                       .version(SWAGGER_API_VERSION)
			                     .build();
	}

	@Bean
	public Docket gameManagerApi() {
		return new Docket(DocumentationType.SWAGGER_2)
                        .apiInfo(apiInfo())
                        .pathMapping("/")
                        .select()
				.paths(PathSelectors.regex("/api/vi.*"))
                        .build();
	}

	
}
