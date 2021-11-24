package org.springframework.samples.petclinic.security;

import javax.annotation.Priority;
import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Alternative;

import org.eclipse.microprofile.config.inject.ConfigProperty;
import io.quarkus.security.spi.runtime.AuthorizationController;
import io.quarkus.security.runtime.interceptor.*;

@Alternative
@Priority(0)
@ApplicationScoped
public class DisabledAuthController extends AuthorizationController {
    @ConfigProperty(name = "disable.authorization", defaultValue = "true")
    boolean disableAuthorization;

    @Override
    public boolean isAuthorizationEnabled() {
        return !disableAuthorization;
    }
}