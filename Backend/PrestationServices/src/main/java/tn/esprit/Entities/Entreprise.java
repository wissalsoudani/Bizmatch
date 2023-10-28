package tn.esprit.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Entreprise {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int identreprise ;
    private String nom ;
    private String secteur;
    private String adresse ;
    private int telephone;
    private String latitude;
    private String longitude;
    private String description;
    private int invitations;

    @OneToMany(mappedBy = "entreprise1")
    @JsonIgnore
    private List<Partenaire> partenaires;
    @OneToMany(mappedBy = "entreprise2")
    @JsonIgnore
    private List<Partenaire> partenairesB;

    @OneToMany(mappedBy = "entreprise")
    @JsonIgnore
    List<BesoinCommercial> besoinCommercials ;

    @OneToMany(mappedBy = "entreprise")
    @JsonIgnore
    private List<ServiceCommercial> serviceCommercials;
    @OneToMany(mappedBy = "entrepriseB")
    @JsonIgnore
    private List<Connexion> connexionsEntrantes;



}
