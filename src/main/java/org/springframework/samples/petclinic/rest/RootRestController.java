/*
 * Copyright 2016-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.springframework.samples.petclinic.rest;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpClient.Redirect;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
//import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriBuilder;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.jboss.resteasy.spi.HttpResponse;
import org.springframework.beans.factory.annotation.Value;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import io.vertx.core.http.HttpClientResponse;

/**
 * @author Vitaliy Fedoriv
 *
 */

@RestController
//@CrossOrigin(exposedHeaders = "errors, content-type")
@RequestMapping("/")
public class RootRestController {

	@ConfigProperty(name = "server.servlet.context-path")
    private String servletContextPath;
	
	@RequestMapping(value = "/")
	public void redirectToSwagger(HttpServletResponse response) throws IOException, URISyntaxException {
//		URI externalUri = new URI(this.servletContextPath + "/swagger-ui.html");
//		Response.seeOther(externalUri).build();
	}
}

