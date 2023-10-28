package tn.esprit.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.Date;

@CrossOrigin
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class BesoinOffre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_besoin;
    private String name_besoin;
    private String descr_besoin;
    private int status_besoin; //0=not met, 1=met

    @Temporal(TemporalType.DATE)
    private Date date_ajout_besoin;

    @Enumerated(EnumType.STRING)
    private TypeBesoinOffre type;
    @Enumerated(EnumType.STRING)
    private CategBesoin category;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "identreprise")
    private Entreprise entreprise;

}


