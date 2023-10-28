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

    private String nom;

    private String secteurActivite;

    private String adresse;

    @Pattern(regexp="[0-9]{10}", message="Le numéro de téléphone doit contenir exactement 10 chiffres.")
    private  String telephone;

    @OneToMany(mappedBy = "entreprisee")
    @JsonIgnore
    private List<CRM> crms;




}
