package tn.esprit.entities;

import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

@CrossOrigin
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Marche {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_marche;
    private String titre;
    @Temporal(TemporalType.DATE)
    private Date date_creation;
    private String description;
    private String photoMarche;
    @ManyToMany
    @JoinTable(name = "entreprise_marche",
            joinColumns = @JoinColumn(name = "id_marche"),
            inverseJoinColumns = @JoinColumn(name = "id_entreprise"))
    private List<Entreprise> entrepriseList;

    public List<Entreprise> getEntreprises() {
        return entrepriseList;
    }

    public void addEntreprise(Entreprise entreprise) {
        entrepriseList.add(entreprise);
        entreprise.getMarches().add(this);
    }

    public void removeEntreprise(Entreprise entreprise) {
        entrepriseList.remove(entreprise);
        entreprise.getMarches().remove(this);
    }


}
