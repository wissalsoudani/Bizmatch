package tn.esprit.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;
import tn.esprit.Generic.GenericController;

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
    private int invitations;
    @NotNull
    @Pattern(regexp="[0-9]{10}", message="Le numéro de téléphone doit contenir exactement 10 chiffres.")
    private  String telephone;
    private String latitude;
    private  String longitude;
    @ManyToMany(mappedBy = "entrepriseList" ,cascade = CascadeType.ALL)
    private List<Marche> marcheList;

    public List<Marche> getMarches() {
        return marcheList;
    }

    public void addMarche(Marche marche) {
        marcheList.add(marche);
        marche.getEntreprises().add(this);
    }

    public void removeMarche(Marche marche) {
        marcheList.remove(marche);
        marche.getEntreprises().remove(this);
    }


}
