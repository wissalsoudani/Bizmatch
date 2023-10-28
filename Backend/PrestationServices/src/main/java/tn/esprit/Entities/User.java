package tn.esprit.Entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;




@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long idUser;

    private String firstName;

    private String lastName;


    private String email;
    @Enumerated(EnumType.STRING)
    private ERole role;
    private String job;
    private String image;
    private boolean active;

    private String tel;

    private String password;



    @Transient
    private int statusCode;
    @Transient
    private String status;

    private String bestFriend;
    private String favoritePet;
    private String entreprise;

}

