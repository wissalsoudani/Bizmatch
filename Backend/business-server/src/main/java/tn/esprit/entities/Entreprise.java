package tn.esprit.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.List;

@CrossOrigin
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Entreprise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int identreprise;
    @NotNull
    private String nom;
    @NotNull
    private String secteurActivite;
    @NotNull
    private String adresse;
    @NotNull
    @Pattern(regexp="[0-9]{10}", message="Phone number is composed of 10 numbers")
    private  String telephone;

    @OneToMany(mappedBy = "entreprise")
    @JsonIgnore
    private List<Objectif> objectifs;

}
