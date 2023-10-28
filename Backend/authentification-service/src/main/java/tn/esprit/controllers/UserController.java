package tn.esprit.controllers;


import org.apache.commons.lang.RandomStringUtils;
import org.jboss.resteasy.client.jaxrs.ResteasyClientBuilder;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.CreatedResponseUtil;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.authorization.client.AuthzClient;
import org.keycloak.authorization.client.Configuration;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import tn.esprit.dto.UserDTO;
import tn.esprit.entities.User;
import tn.esprit.exceptions.CustomException;
import tn.esprit.services.EmailService;
import tn.esprit.services.IUserService;

import javax.validation.Valid;
import javax.ws.rs.core.Response;
import java.util.*;


@RequestMapping(value = "/auth")
@RestController

public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);


    private String authServerUrl = "http://localhost:8280";
    private String realm = "spring-boot-microservices-realm";
    private String clientId = "spring-cloud-client";
    private String clientSecret = "ItqlhaOghwBfKk34UQ9Bt0vxDmVTPOJ2";
    private String real ="master";
    private String client ="admin-cli";
    private String username="admin";
    private String password="admin";
    @Autowired
    private IUserService userService;
    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;




    @PostMapping(path = "/create")
    public ResponseEntity<Object> createUser(@RequestBody @Valid UserDTO user) throws CustomException {
        String randomString = RandomStringUtils.randomAlphanumeric(4);
        if (userService.findUser(user.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Collections.singletonMap("error", "There is an account with that email address: " + user.getEmail()));

        } else {
            try (Keycloak keycloak = KeycloakBuilder.builder()
                    .serverUrl(authServerUrl)
                    .grantType(OAuth2Constants.PASSWORD)
                    .realm(real)
                    .clientId(client)
                    .username(username)
                    .password(password)
                    .resteasyClient(new ResteasyClientBuilder().connectionPoolSize(10).build())
                    .build()) {

                keycloak.tokenManager().getAccessToken();

                UserRepresentation userRepresentation = new UserRepresentation();
                String pwd = user.getPassword();
                userRepresentation.setEnabled(true);
                userRepresentation.setUsername(user.getEmail());
                userRepresentation.setFirstName(user.getFirstName());
                userRepresentation.setLastName(user.getLastName());
                userRepresentation.setEmail(user.getEmail());

                // Get realm
                RealmResource realmResource = keycloak.realm(realm);
                UsersResource usersResource = realmResource.users();

                try (Response response = usersResource.create(userRepresentation)) {
                    user.setStatusCode(response.getStatus());
                    user.setStatus(response.getStatusInfo().toString());

                    if (response.getStatus() == 201) {
                        String userId = CreatedResponseUtil.getCreatedId(response);
                        log.info("Created userId {}", userId);

                        // Create password credential
                        CredentialRepresentation passwordCred = new CredentialRepresentation();
                        passwordCred.setTemporary(false);
                        passwordCred.setType(CredentialRepresentation.PASSWORD);
                        passwordCred.setValue(user.getPassword());

                        UserResource userResource = usersResource.get(userId);
                        userResource.resetPassword(passwordCred);

                        RoleRepresentation realmRoleUser = realmResource.roles().get(user.getRole().toString()).toRepresentation();
                        userResource.roles().realmLevel().add(Collections.singletonList(realmRoleUser));
                    }
                }
                user.setPassword(passwordEncoder.encode(pwd));
                user.setCode(randomString);
                userService.addUser(user);

                // Send confirmation email
                Map<String, Object> model = new HashMap<>();
                model.put("name", user.getFirstName());

                String confirmationEmailText = "Welcome to our application, here is your activation code: " +randomString;

                boolean emailSent = emailService.sendEmail(user.getEmail(), "Compte BIZMATCH", confirmationEmailText, model);

                if (emailSent) {
                    return ResponseEntity.ok(Collections.singletonMap("message", "User created successfully. Confirmation email sent."));
                } else {
                    return ResponseEntity.ok(Collections.singletonMap("message", "User created successfully, but there was an issue sending the confirmation email."));

                }
            } catch (Exception e) {
                // Handle other exceptions if necessary
                return ResponseEntity.ok(Collections.singletonMap("message", "error creating user."));

            }
        }
    }


    @PostMapping(path = "/signin")
    public ResponseEntity<AccessTokenResponse> signin(@RequestBody UserDTO userDTO) {
        User user = userService.findUser(userDTO.getEmail());
        if (user == null || !user.isActive()) {
            return ResponseEntity.notFound().build();
        } else {
            Map<String, Object> clientCredentials = new HashMap<>();
            clientCredentials.put("secret", clientSecret);
            clientCredentials.put("grant_type", "password");
            Configuration configuration = new Configuration(authServerUrl, realm, clientId, clientCredentials, null);
            AuthzClient authzClient = AuthzClient.create(configuration);

            AccessTokenResponse response = authzClient.obtainAccessToken(userDTO.getEmail(), userDTO.getPassword());
            return ResponseEntity.ok(response);
        }
    }





    @PostMapping(path = "/admin/ForgotPassword/{userName}/{newPassword}")
    public String sendForgotPassword(
            @PathVariable("userName") String userName,
            @PathVariable("newPassword") String newPassword,
            @RequestBody UserDTO userDTO
    ) {
        User user2 = userService.findUser(userName);

        if (user2 == null) {
            return "There isn't an account with that email address: " + userName;
        } else {
            if (


                            userDTO.getBestFriend().equals(user2.getBestFriend())
                            && userDTO.getFavoritePet().equals(user2.getFavoritePet())
            ) {

                    Keycloak keycloak = KeycloakBuilder.builder().serverUrl(authServerUrl)
                            .grantType(OAuth2Constants.PASSWORD).realm(real).clientId(client)
                            .username(username).password(password)
                            .resteasyClient(new ResteasyClientBuilder().connectionPoolSize(10).build()).build();
                    RealmResource realmResource = keycloak.realm(realm);
                    UsersResource usersRessource = realmResource.users();
                    // create password credential
                    CredentialRepresentation passwordCred = new CredentialRepresentation();
                    passwordCred.setTemporary(false);
                    passwordCred.setType(CredentialRepresentation.PASSWORD);
                    passwordCred.setValue(userDTO.getPassword());
                    List<UserRepresentation> user = usersRessource.search(userName, true);
                    for (UserRepresentation u:user
                    ) {
                        UserResource userResource = usersRessource.get(u.getId());

                        // Set password credential
                        userResource.resetPassword(passwordCred);

                    }
                userDTO.setPassword(passwordEncoder.encode(newPassword));
                userService.resetPassword(userName, userDTO);

                return "Reset Password Successfully to Registered E-mail Id.";
            } else {
                return "Bad credentials";
            }
        }
    }





    @PutMapping("/userAct/{code}/{userName}")
    public User activateUser( @PathVariable("userName") String userName,
                              @PathVariable("code") String code
                              ){
        return userService.activateUser(userName, code);
    }

}