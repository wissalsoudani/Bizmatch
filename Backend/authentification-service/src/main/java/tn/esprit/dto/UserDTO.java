package tn.esprit.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import tn.esprit.entities.ERole;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
@Getter
@Setter
@Data
public class UserDTO {
    private long idUser;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private int statusCode;
    private String status;
    private String image;
    private boolean active;
    private String tel;
    @Enumerated(EnumType.STRING)
    private ERole role;
    private String bestFriend;
    private String favoritePet;
    private String entreprise;

    private String job;
    private String code;

}